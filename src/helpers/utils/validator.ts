import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { ValidationType } from "@/helpers/constants/validationType";
import { Wrapper } from "./Wrapper";
import { commonError } from "@/helpers/constants/response";
import { logger } from ".";

export const JoiObjectId = (): Joi.StringSchema =>
  Joi.string().custom((value: string, helpers) => {
    if (!Types.ObjectId.isValid(value)) return helpers.error("any.invalid");
    return value;
  }, "Object Id Validation");

export const JoiUrlEndpoint = (): Joi.StringSchema =>
  Joi.string().custom((value: string, helpers) => {
    if (value.includes("://")) return helpers.error("any.invalid");
    return value;
  }, "Url Endpoint Validation");

export const JoiAuthBearer = (): Joi.StringSchema =>
  Joi.string().custom((value: string, helpers) => {
    if (!value.startsWith("Bearer ")) return helpers.error("any.invalid");
    if (!value.split(" ")[1]) return helpers.error("any.invalid");
    return value;
  }, "Authorization Header Validation");

export default (
  schema: Joi.ObjectSchema,
  source: ValidationType = ValidationType.BODY
) => (
  req: Request,
  res: Response,
  next: NextFunction
): Joi.StringSchema | void => {
  try {
    const { error } = schema.validate(req[source]);

    if (!error) return next();

    const { details } = error;
    const message = details
      .map((i) => i.message.replace(/['"]+/g, ""))
      .join(",");
    let object: any = { ...commonError.badRequest };
    object.msg = message;
    logger.info(object);
    next(new Wrapper(object).send(res));
  } catch (error) {
    next(error);
  }
};
