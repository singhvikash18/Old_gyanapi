const Joi = require('joi');

const categoryvalid = {
    body: Joi.object().keys({
        course_category_id : Joi.string(),
        course_category_name : Joi.string(),
        course_category_image : Joi.string(),
        course_created_at : Joi.string()
    })
};

module.exports={categoryvalid}