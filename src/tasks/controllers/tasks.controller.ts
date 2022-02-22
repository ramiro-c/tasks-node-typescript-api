import { Request, RequestHandler, Response } from "express";
import * as TaskService from "../services/tasks.service";
import { IBaseTask, ITask } from "../interfaces/task.interface";
import { ITasks } from "../interfaces/tasks.interface";

export const getTasks: RequestHandler = async (req: Request, res: Response) => {
  try {
    const tasks: ITasks = await TaskService.findAll();

    res.status(200).json(tasks);
  } catch (e: any) {
    res.status(500).json(e?.message);
  }
}

export const getTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    const task: ITask | null = await TaskService.find(req.params.id);

    if (task) {
      return res.status(200).json(task);
    }

    res.status(404).json("task not found");
  } catch (e: any) {
    res.status(500).json(e?.message);
  }
}

export const createTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    const task: IBaseTask = req.body;

    const newTask: ITask = await TaskService.create(task);

    res.status(201).json(newTask);
  } catch (e: any) {
    res.status(500).json(e?.message);
  }
};

export const updateTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    const taskUpdate: ITask = req.body;
    const updatedTask: ITask | null = await TaskService.update(req.params.id, taskUpdate);

    if (updatedTask) {
      return res.status(200).json(updatedTask);
    }

    res.status(404).json("task not found");
  } catch (e: any) {
    res.status(500).json(e?.message);
  }
}

export const removeTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    const task: ITask | null = await TaskService.remove(req.params.id);

    if (task) {
      return res.status(200).json(task);
    }

    res.status(404).json("task not found");
  } catch (e: any) {
    res.status(500).json(e?.message);
  }
}