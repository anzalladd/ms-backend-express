import { Container } from "typedi";
import { logger as LoggerInstance } from "@/helpers/utils";

interface Entity {
  name: string;
  entity: any;
}

interface Services {
  name: string;
  service: any;
}

export default (entity: Array<Entity>, services: Array<Services>) => {
  try {
    // Set logger to container
    Container.set("logger", LoggerInstance);
    // Set entity to container
    entity.forEach((m) => {
      Container.set(m.name, m.entity);
    });
    // Set service to container
    services.forEach((s) => {
      Container.set(s.name, Container.get(s.service));
    });

    LoggerInstance.info("Logger injection success ✔️");
  } catch (e) {
    LoggerInstance.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
};
