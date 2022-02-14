import { IStock } from "@/interfaces/IStock";
import { CollationDocument, EntitySchema } from "typeorm";
declare global {
  namespace Express {}
  namespace Entities {
    export type User = EntitySchema<IUser & CollationDocument>;
  }
  namespace Entities {
    export type Stock = EntitySchema<IStock & CollationDocument>;
  }
}
