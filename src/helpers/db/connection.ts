import { getConnectionManager } from "typeorm";

const path = process.env.NODE_ENV?.trim() === 'development' ? 'src' : 'build/src'
const connectionManager = getConnectionManager()
const connection = connectionManager.create({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${path}/entities/*`],
  migrations: [`${path}/migrations/*`],
  synchronize: false,
  logging: false,
});

export default connection;
