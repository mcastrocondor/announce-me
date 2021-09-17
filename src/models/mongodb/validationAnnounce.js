const Joi = require('joi');

const schemaAnnounce = Joi.object({
    userId: Joi.string()
        .min(8)
        .max(50)
        .required(),

    description: Joi.string()
        .min(3)
        .max(200)
        .required(),

    category: Joi.string()
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