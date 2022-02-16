/**
 * Required External Modules
 */
const dotenv = require("dotenv");
import express from "express";
import morgan from "morgan";
import cors from "cors";

const helmet = require("helmet");

import tasksRouter from "./tasks/routes/tasks.routes";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const BASE_URL: string = "/api/v1";
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(BASE_URL + "/tasks", tasksRouter);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});