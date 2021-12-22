const Joi = require('joi')

const login = {
    body: Joi.object().keys({
        roles: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

module.exports = {
    login
}