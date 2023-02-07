import joi from "joi";

export const userSchema = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
});