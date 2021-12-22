const Joi = require('joi');

const categoryvalid = {
    body: Joi.object().keys({
        course_category_id : Joi.string(),
        
    })
}