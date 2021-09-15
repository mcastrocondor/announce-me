const Joi = require('joi');

const schemaAnnounce = Joi.object({
    userId: Joi.number()
        .required(),

    description: Joi.string()
        .alphanum()
        .min(3)
        .max(200)
        .required(),

    category: Joi.string()
        .alphanum()
        .min(3)
        .max(200)
        .required(),

    status: Joi.number()
        .integer()
        .min(1)
        .max(1) 
        .required()   
});

module.exports = schemaAnnounce;