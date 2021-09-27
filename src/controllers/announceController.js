const validationUpdateAnnounce = require('../models/mongodb/validationUpdateAnnounce');
const validationAnnounce = require('../models/mongodb/validationAnnounce');
const validationDeleteAnnounce = require('../models/mongodb/validationDeleteAnnounce');
const validationFilter = require('../models/mongodb/validationFilter');
const validationId = require('../models/mongodb/validationId');
const validationText = require('../models/mongodb/validationText');
const announceRepository = require('../repository/announceRepository');
require('dotenv').config();
const redis = require('@condor-labs/redis');

const { REDIS_PREFIX, REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

const settingsRedis = {
    prefix: REDIS_PREFIX,
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD
};

exports.createAnnounce = async function (req, res) {
    try {
        const reqUser = req.user;
        const userId = req.params.id;
        console.log('reqUser ', reqUser);
        const userId = req.params.id;
        if (reqUser == userId) {
            const validatedData = validationAnnounce.validate({
                userId: userId,
                description: req.body.description,
                category: req.body.category,
                status: 1
            });

            if (!validatedData.error) {
                const data = {
                    userId: req.params.id,
                    description: req.body.description,
                    category: req.body.category.toLowerCase()
                }
                const announce = await announceRepository.saveAnnounce(data);
                return res.status(201).send({ data: announce, msg: "Created announce" });

            } else {

                return res.status(400).send({ msg: "error invalids data" });
            }
        } else {
            return res.status(401).send({ msg: "UserId doesn't coincide with authenticated user" });
        }
    } catch (err) {

        return res.status(500).send({ msg: err.message });
    }
};

exports.getAnnouncesbyUserFilters = async function (req, res) {
    if (typeof req.query.category !== 'undefined') {
        getAnnouncesByUserCategory(req, res);
    }
    else {
        getAnnouncesByUser(req, res);
    }
};

async function getAnnouncesByUserCategory(req, res) {
    try {
        const validatedDataFilter = validationFilter.validate({
            userId: req.params.id,
            category: req.query.category
        });

        if (!validatedDataFilter.error) {
            const filterAnnunces = await announceRepository.findAnnouncesByCategoy(req.params.id, req.query.category.toLowerCase());
            return res.status(200).send({ data: filterAnnunces, msg: "Filtered announces by category" });

        } else {
            return res.status(400).send({ msg: "error invalids data" });
        }
    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
}

async function getAnnouncesByUser(req, res) {
    try {
        const validatedData = validationId.validate({
            id: req.params.id
        });

        if (!validatedData.error) {
            const announces = await announceRepository.findAnnouncesByUser(req.params.id);
            return res.status(200).send({ data: announces, msg: "Filtered announces by user" });
        } else {
            return res.status(400).send({ msg: "error invalids data" });
        }
    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
}

exports.getAnnouncesbyDescription = async function (req, res) {

    try {
        const description = req.query.description;
        const { page = 1, limit = 10 } = req.query;
        const validatedText = validationText.validate({
            text: description
        });

        if (!validatedText.error) {
            const redisClient = await redis(settingsRedis).getClient();
            const redisKey = `ANNOUNCE-DESCRIPTION:${description}_${page}`;
            const cachedData = await redisClient.getAsync(redisKey);
            let filterAnnunces;
            let filterAnnuncesCache;
            const data = {
                description: description,
                limit: limit,
                page: page,
                redisClient: redisClient,
                redisKey: redisKey
            };
            if (!cachedData) {

                filterAnnunces = await getAnnouncesRegexDescription(data);

            } else {

                filterAnnuncesCache = JSON.parse(cachedData);
                const totalPages = filterAnnuncesCache.totalPages;
                const currentPage = filterAnnuncesCache.currentPage;
                const announces = filterAnnuncesCache.announces;
                const countCache = announces.length;

                if (countCache < limit) {

                    filterAnnuncesCache = await getAnnouncesRegexDescription(data);
                } else if (countCache > limit) {

                    let newObject = { announces: announces.slice(0, limit), totalPages: totalPages, currentPage: currentPage };
                    filterAnnuncesCache = newObject;
                }
            }

            filterAnnunces = (!cachedData) ? filterAnnunces : filterAnnuncesCache;

            return res.status(200).send({ data: filterAnnunces, msg: "Filtered announces by description" });

        } else {
            return res.status(400).send({ msg: "error invalids data" });
        }
    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
}

async function getAnnouncesRegexDescription(data) {
    const redisTTL = 3600;
    const filterAnnunces = await announceRepository.findAnnouncesByDescription({ data: data.data, description: data.description, limit: data.limit, page: data.page });
    await data.redisClient.set(data.redisKey, JSON.stringify(filterAnnunces), 'EX', redisTTL);
    return filterAnnunces;
}

exports.getAnnouncebyId = async function (req, res) {

    try {
        const redisClient = await redis(settingsRedis).getClient();
        const redisTTL = 3600;
        const announceId = req.params.id;
        const validatedData = validationId.validate({
            id: announceId
        });

        if (!validatedData.error) {
            let announce;
            const redisKey = `ANNOUNCE:${announceId}`;
            const cachedData = await redisClient.getAsync(redisKey);
            if (!cachedData) {
                announce = await announceRepository.findAnnounceById(announceId);
                await redisClient.set(redisKey, JSON.stringify(announce), 'EX', redisTTL);
            }
            announce = cachedData ? JSON.parse(cachedData) : announce;
            return res.status(200).send({ data: announce, msg: "Filtered announce by id" });

        } else {
            return res.status(400).send({ msg: "error invalids data" });
        }
    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};

exports.removeAnnounce = async function (req, res) {
    try {
        const validatedData = validationDeleteAnnounce.validate({
            userId: req.params.id,
            id: req.params.announceId
        });

        if (!validatedData.error) {
            const announce = await announceRepository.deleteAnnounce(req.params.announceId, req.params.id);
            if (announce) {
                return res.status(204).send({ data: announce, msg: "Deleted announce" });
            } else {
                return res.status(404).send({ msg: "Announce doesn't find" });
            }

        } else {
            return res.status(400).send({ msg: "error invalids data" });
        }

    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};


exports.updateAnnounce = async function (req, res) {
    try {
        const validatedData = validationUpdateAnnounce.validate({
            userId: req.params.id,
            id: req.params.announceId,
            status: req.body.status
        });

        if (!validatedData.error) {
            const announce = await announceRepository.modifyAnnounce(req.params.id, req.params.announceId, req.body.status);
            if (announce) {
                return res.status(201).send({ data: announce, msg: "Updated announce" });
            } else {
                return res.status(404).send({ msg: "Announce doesn't find" });
            }
        } else {
            return 'error invalids data';
        }

    } catch (err) {
        return res.status(500).send({ msg: err.message });
    }
};
