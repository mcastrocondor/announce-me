require("dotenv").config();
const redis = require("@condor-labs/redis");

const validationUpdateAnnounce = require("../models/mongodb/validationUpdateAnnounce");
const validationAnnounce = require("../models/mongodb/validationAnnounce");
const validationDeleteAnnounce = require("../models/mongodb/validationDeleteAnnounce");
const validationFilter = require("../models/mongodb/validationFilter");
const validationId = require("../models/mongodb/validationId");
const validationText = require("../models/mongodb/validationText");
const announceRepository = require("../repository/announceRepository");

const { REDIS_PREFIX, REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

const settingsRedis = {
  prefix: REDIS_PREFIX,
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
};

exports.createAnnounce = async function (req, res) {
  try {
    const { user: reqUser, params, body } = req;
    const userId = params.id;

    if (reqUser === userId) {
      const validatedData = validationAnnounce.validate({
        userId: userId,
        description: body.description,
        category: body.category,
        status: 1,
      });

      if (validatedData.error) {
        return res.status(400).send({ msg: "error invalids data" });
      }

      const data = {
        userId: params.id,
        description: body.description,
        category: body.category.toLowerCase(),
      };

      const announce = await announceRepository.saveAnnounce(data);

      return res.status(201).send({ data: announce, msg: "Created announce" });
    }

    return res
      .status(401)
      .send({ msg: "UserId doesn't coincide with authenticated user" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

exports.getAnnouncesbyUserFilters = async function (req, res) {
  if (req.query.category) {
    return getAnnouncesByUserCategory(req, res);
  }
  return getAnnouncesByUser(req, res);
};

async function getAnnouncesByUserCategory(req, res) {
  try {
    const { params, query } = req;
    const validatedDataFilter = validationFilter.validate({
      userId: params.id,
      category: query.category,
    });

    if (validatedDataFilter.error) {
      return res.status(400).send({ msg: "error invalids data" });
    }
    const filterAnnunces = await announceRepository.findAnnouncesByCategoy(
      params.id,
      query.category.toLowerCase()
    );
    return res
      .status(200)
      .send({ data: filterAnnunces, msg: "Filtered announces by category" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
}

async function getAnnouncesByUser(req, res) {
  try {
    const validatedData = validationId.validate({
      id: req.params.id,
    });

    if (validatedData.error) {
      return res.status(400).send({ msg: "error invalids data" });
    }
    const announces = await announceRepository.findAnnouncesByUser(
      req.params.id
    );
    return res
      .status(200)
      .send({ data: announces, msg: "Filtered announces by user" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
}

exports.getAnnouncesbyDescription = async function (req, res) {
  try {
    const description = req.query.description;
    const { page = 1, limit = 10 } = req.query;
    const validatedText = validationText.validate({
      text: description,
    });

    if (validatedText.error) {
      return res.status(400).send({ msg: "error invalids data" });
    }
    const redisClient = await redis(settingsRedis).getClient();
    const redisKey = `ANNOUNCE-DESCRIPTION:${description}_${page}`;
    const cachedData = await redisClient.getAsync(redisKey);
    let filterAnnunces;
    let filterAnnuncesCache;
    const data = {
      description: description,
      limit: +limit,
      page: +page,
      redisClient: redisClient,
      redisKey: redisKey,
    };
    if (cachedData) {
      filterAnnuncesCache = JSON.parse(cachedData);
      const totalPages = filterAnnuncesCache.totalPages;
      const currentPage = filterAnnuncesCache.currentPage;
      const announces = filterAnnuncesCache.announces;
      const countCache = announces.length;

      if (countCache < limit) {
        filterAnnuncesCache = await getAnnouncesRegexDescription(data);
      } else if (countCache > limit) {
        let newObject = {
          announces: announces.slice(0, limit),
          totalPages: totalPages,
          currentPage: currentPage,
        };
        filterAnnuncesCache = newObject;
      }
    } else {
      filterAnnunces = await getAnnouncesRegexDescription(data);
    }

    filterAnnunces = cachedData ? filterAnnuncesCache : filterAnnunces;

    return res.status(200).send({
      data: filterAnnunces,
      msg: "Filtered announces by description",
    });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

async function getAnnouncesRegexDescription(data) {
  const redisTTL = 3600;
  const filterAnnunces = await announceRepository.findAnnouncesByDescription({
    data: data.data,
    description: data.description,
    limit: data.limit,
    page: data.page,
  });
  await data.redisClient.set(
    data.redisKey,
    JSON.stringify(filterAnnunces),
    "EX",
    redisTTL
  );
  return filterAnnunces;
}

exports.getAnnouncebyId = async function (req, res) {
  try {
    const redisClient = await redis(settingsRedis).getClient();
    const redisTTL = 3600;
    const announceId = req.params.id;
    const validatedData = validationId.validate({
      id: announceId,
    });

    if (validatedData.error) {
      return res.status(400).send({ msg: "error invalids data" });
    }
    let announce;
    const redisKey = `ANNOUNCE:${announceId}`;
    const cachedData = await redisClient.getAsync(redisKey);
    if (!cachedData) {
      announce = await announceRepository.findAnnounceById(announceId);
      await redisClient.set(redisKey, JSON.stringify(announce), "EX", redisTTL);
    }
    announce = cachedData ? JSON.parse(cachedData) : announce;
    return res
      .status(200)
      .send({ data: announce, msg: "Filtered announce by id" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

exports.removeAnnounce = async function (req, res) {
  try {
    const {
      params: { id, announceId },
    } = req;
    const validatedData = validationDeleteAnnounce.validate({
      userId: id,
      id: announceId,
    });

    if (validatedData.error) {
      return res.status(400).send({ msg: "error invalids data" });
    }
    const announce = await announceRepository.deleteAnnounce(announceId, id);
    if (announce) {
      return res.status(204).send({ data: announce, msg: "Deleted announce" });
    }
    return res.status(404).send({ msg: "Announce doesn't find" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

exports.updateAnnounce = async function (req, res) {
  try {
    const { params, body } = req;
    const validatedData = validationUpdateAnnounce.validate({
      userId: params.id,
      id: params.announceId,
      status: body.status,
    });

    if (validatedData.error) {
      return res.status(400).send({ msg: "error invalids data" });
    }
    const announce = await announceRepository.modifyAnnounce(
      params.id,
      params.announceId,
      body.status
    );
    if (announce) {
      return res.status(201).send({ data: announce, msg: "Updated announce" });
    }
    return res.status(404).send({ msg: "Announce doesn't find" });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};
