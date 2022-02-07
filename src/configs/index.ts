require("dotenv").config();

export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;
export const logDirectory = process.env.LOG_DIR;
export const jwtToken = process.env.JWT_TOKEN;