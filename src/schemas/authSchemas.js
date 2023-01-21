import Joi from "joi"

export const registerUserSchema = Joi.object({
    name: Joi.email().required(),
    email: Joi.email().min(1).required(),
    password: Joi.string().min(4).required(),
    confirmPassword: Joi.ref('password')
})

export const loginUserSchema = Joi.object({
    email: Joi.email().min(1).required(),
    password: Joi.string().min(4).required()
})

