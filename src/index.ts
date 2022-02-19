/**
 * Required External Modules
 */
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import tasksRouter from "./tasks/routes/tasks.routes";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

import config from "./config";
import "./db";

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(config.BASE_URL + "/tasks", tasksRouter);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});