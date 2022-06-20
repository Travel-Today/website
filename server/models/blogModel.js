import Joi  from "joi";

export const blogModel=Joi.object({
    email:Joi.string().email().required(),
    title: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().required(),
})