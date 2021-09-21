const Joi = require('joi');

const schemaFilterAnnounce = Joi.object({
    userId: Joi.string()
        .min(8)
        .max(50)
        .required(),

    category: Joi.string()
        .min(3)
        .max(200)
        .required()
});

module.exports = schemaFilterAnnounce;