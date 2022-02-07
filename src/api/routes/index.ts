import { Router } from "express";
import routerV1 from "./v1";

export default () => {
  const app = Router();
  app.use("/v1", routerV1);
  return app;
};
