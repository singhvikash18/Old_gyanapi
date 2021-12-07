const Joi = require('joi')

const cavalid = {
    body: Joi.object().keys({
        currentaffair_id: Joi.string().required(),
        currentaffair_description: Joi.string().required(),
        currentaffair_image: Joi.string().required(),
        currentaffair_created_at: Joi.date().iso().required(),
        currentaffair_slug: Joi.string().required(),
        currentaffair_title: Joi.string().required(),
        currentaffair_summary: Joi.string().required()
    }),
};

module.exports ={ cavalid }