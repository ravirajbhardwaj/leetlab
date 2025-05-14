import app from "./app.js";
import dotenv from "dotenv";
import logger from "./utils/logger.js";

dotenv.config({
  path: "./.env",
});

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () =>
  logger.info(
    `⚙️  Server is running at: ${process.env.BASE_URI}:${process.env.PORT}`,
  ),
);
