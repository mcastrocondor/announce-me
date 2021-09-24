const Joi = require('joi');

const schemaUpdateAnnounce = Joi.object({
    id: Joi.string()
        .required(),

    userId: Joi.string()
        .min(8)
        .max(50)
        .required(),

    status: Joi.number()
        .integer()
        .min(0)
        .max(1)
        .required()
});

module.exports = schemaUpdateAnnounce;