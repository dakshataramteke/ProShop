const Joi = require('joi');

const UserSchema = Joi.object({
    name: Joi.string().required(),
    email:Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    phone: Joi.string().required(),
    address : Joi.string().required(),
    role: Joi.number().default(0)
})
module.exports = {UserSchema};