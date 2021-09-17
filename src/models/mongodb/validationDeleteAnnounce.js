const Joi = require('joi');

const schemaDeleteAnnounce = Joi.object({
    id: Joi.string()
        .required(),   

    userId: Joi.string()
        .required()

});

module.exports = schemaDeleteAnnounce;