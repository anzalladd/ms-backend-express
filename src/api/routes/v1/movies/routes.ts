import express, { NextFunction, Request, Response } from "express";
import { validator } from "@/helpers/utils";
import { ValidationType } from "@/helpers/constants/validationType";
import MoviesController from "./MoviesController";

const router = express.Router();

router.get("/", (req, res, next) => {
  MoviesController.getAllData(req, res, next);
});


export default router;