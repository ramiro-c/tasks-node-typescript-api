/**
 * Required External Modules and Interfaces
 */
import { Router } from "express";
import * as TaskController from "../controllers/tasks.controller";
/**
 * Router Definition
 */
const tasksRouter = Router();

/**
 * Routes Definition
 */

// GET items
tasksRouter.get("/", TaskController.getTasks);

// GET items/:id
tasksRouter.get("/:id", TaskController.getTask);

// POST items
tasksRouter.post("/", TaskController.createTask);

// PUT items/:id
tasksRouter.put("/:id", TaskController.updateTask);

// DELETE items/:id
tasksRouter.delete("/:id", TaskController.removeTask);

export default tasksRouter;