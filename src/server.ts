import './moduleAlias'
import 'reflect-metadata'
import express from 'express'
import { port } from '@/configs'
import logger from '@/helpers/utils/logger'

async function server() {
  const app = express();
  await require("@/helpers/loaders").default({ expressApp: app });
  app
    .listen(port, () => {
      logger.info(`Server listening on port: ${port} ✔️`);
    })
    .on("error", (e: any) => logger.error(e));
}

server();
