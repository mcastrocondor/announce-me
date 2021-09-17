const Joi = require('joi');

const schemaDeleteAnnounce = Joi.object({
    id: Joi.string()
        .min(8)
        .max(50)
        .required(),   

    userId: Joi.string()
        .required()
        .min(8)
        .max(50)

});

module.exports = schemaDeleteAnnounce;