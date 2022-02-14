import express from "express";
import bodyParser, { urlencoded } from "body-parser";
import cors from "cors";
import morgan from "morgan";
import routes from "@/api/routes";
import { errors } from "celebrate";
import swaggerUi from "swagger-ui-express";
import multer from "multer";

export default ({ app }: { app: express.Application }) => {
 
  app.use(bodyParser.json({ limit: "10mb" }));
  app.use(
    bodyParser.urlencoded({
      limit: "10mb",
      extended: true,
      parameterLimit: 50000,
    })
  );
  const upload = multer();
  app.use(upload.array(''));
  app.use(errors());
  app.use(urlencoded({ extended: false }));
  app.use(cors({ origin: '*' }));
  // Status
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });
  // Routes with prefix api
  app.use("/api", routes());
  // Not found
  app.use((req, res, next) => {
    const err: any = new Error("Not found");
    err["message"] = "Not found";
    err["status"] = 404;
    res.send(err);
  });
};
