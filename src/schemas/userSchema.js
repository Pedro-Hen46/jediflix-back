import joi from "joi";

export const registerUserSchema = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required().min(6)
});

export const userLoginSchema = joi.object().keys({
    email: joi.string().required(),
    password: joi.string().required()
});

export const userUpdateSchema = joi.object().keys({
    email: joi.string().required(),
    name: joi.string(),
    newPassword: joi.string().min(6)
});