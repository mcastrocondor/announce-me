const Joi = require('joi');

const schemaValidateText = Joi.object({

    text: Joi.string()
        .min(3)
        .max(200)
        .optional()
});

module.exports = schemaValidateText;