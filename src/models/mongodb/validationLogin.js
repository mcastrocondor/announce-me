const Joi = require('joi');

const schemaLogin = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(60)
        .required(),  

    password: Joi.string()
       // .pattern(new RegExp('^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{4,20}$'))
        .required(),

    
});

module.exports = schemaLogin;