const Joi = require('joi')

const cavalid = {
    body: Joi.object().keys({
        currentaffair_id: Joi.string(),
        currentaffair_description: Joi.string(),
        currentaffair_image: Joi.string(),
        currentaffair_created_at: Joi.string(),
        currentaffair_slug: Joi.string(),
        currentaffair_title: Joi.string(),
        currentaffair_summary: Joi.string()
    }),
};

module.exports ={ cavalid }