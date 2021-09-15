const Joi = require('joi');

const schemaUser = Joi.object({
    name: Joi.string()
        .min(3)
        .max(60)
        .required(),

    username: Joi.string()
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
    ]
    
});

module.exports = schemaUser;