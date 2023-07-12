import Joi from "joi";

export const schemaSingUp = Joi.object({
    name: Joi.string().min(2).max(15).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
})

export const schemaSingIn = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
})