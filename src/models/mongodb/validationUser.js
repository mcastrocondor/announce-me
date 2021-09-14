const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(60)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,20}$'))
        .required(),

    token: [
        Joi.string(),
        Joi.number()
    ],

    announceDescription: Joi.string()
        .alphanum()
        .min(3)
        .max(200)
        .required(),

    announceCategory: Joi.string()
        .alphanum()
        .min(3)
        .max(200)
        .required(),

    announceStatus: Joi.number()
    .integer()
    .min(1)
    .max(1)
    .required(),    
});

module.exports = schema;