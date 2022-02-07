module.exports = {
  "skip": false,
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "logging": true,
  "entities": ["src/entities/*.ts"],
  "migrations": ["src/migrations/*.ts"],
   "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/migrations"
   }
}