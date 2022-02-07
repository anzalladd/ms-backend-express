import expressLoader from "./express";
import dependencyInjectorLoader from "./depedencyInjections";
import { logger } from "@/helpers/utils";
import express from "express";
import services from "@/helpers/constants/services";
import entities from "@/helpers/constants/entities";
import connection from "@/helpers/db/connection";

export default async ({ expressApp }: { expressApp: express.Application }) => {
  // Database connection
  await connection.connect();
  logger.info("Database connected ✔️");
  //   Load injection
  await dependencyInjectorLoader(entities, services);
  logger.info("Dependency Injector loaded ✔️");
  //   Load express
  await expressLoader({ app: expressApp });
  logger.info("Express loaded ✔️");
};
