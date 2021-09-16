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
        .pattern(new RegExp('^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,20}$'))
        .required(),

    token: [
        Joi.string(),
        Joi.number()
    ]
    
});

module.exports = schemaUser;