const Joi = require('joi');

const schemaAnnounceId = Joi.object({
    id: Joi.string()
        .min(8)
        .max(50)
        .required()
});

module.exports = schemaAnnounceId;