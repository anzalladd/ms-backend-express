import Joi from "joi";

export default {
  signup: Joi.object().keys({
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
  login: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};