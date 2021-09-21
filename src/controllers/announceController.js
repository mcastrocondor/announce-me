const validationUpdateAnnounce = require('../models/mongodb/validationUpdateAnnounce');
const validationAnnounce = require('../models/mongodb/validationAnnounce');
const validationDeleteAnnounce = require('../models/mongodb/validationDeleteAnnounce');
const validationFilter = require('../models/mongodb/validationFilter');
const validationId = require('../models/mongodb/validationId');
const announceRepository = require('../repository/announceRepository');


exports.createAnnounce = async function (req, res) {
    try {
        const validatedData = validationAnnounce.validate({
            userId: req.params.id,
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
    } catch (err) {

        return res.status(500).send({ msg: err });
    }
};

exports.getAnnouncesbyUser = async function (req, res) {
    if (typeof req.query.category !== 'undefined') {
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
            return res.status(500).send({ msg: err });
        }
    }
    else {
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
            return res.status(500).send({ msg: err });
        }
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
                return res.status(200).send({ data: announce, msg: "Deleted announce" });
            } else {
                return res.status(404).send({ msg: "Announce doesn't find" });
            }

        } else {
            return res.status(400).send({ msg: "error invalids data" });
        }

    } catch (err) {
        return res.status(500).send({ msg: err });
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

            return res.status(201).send({ data: announce, msg: "Updated announce" });
        } else {
            return 'error invalids data';
        }

    } catch (err) {
        return res.status(500).send({ msg: err });
    }
};

