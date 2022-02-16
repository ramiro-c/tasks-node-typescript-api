import { Request, Response } from "express";
import * as TaskService from "../services/tasks.service";
import { BaseTask, Task } from "../interfaces/task.interface";
import { Tasks } from "../interfaces/tasks.interface";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks: Tasks = await TaskService.findAll();

    res.status(200).json(tasks);
  } catch (e: any) {
    res.status(500).send(e?.message);
  }
}

export const getTask = async (req: Request, res: Response) => {
  try {
    const task: Task | undefined = await TaskService.find(req.params.id);

    if (task) {
      return res.status(200).json(task);
    }

    res.status(404).send("task not found");
  } catch (e: any) {
    res.status(500).send(e?.message);
  }
}

export const createTask = async (req: Request, res: Response) => {
  try {
    const task: BaseTask = req.body;

    const newTask: Task = await TaskService.create(task);

    res.status(201).json(newTask);
  } catch (e: any) {
    res.status(500).send(e?.message);
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const taskUpdate: Task = req.body;

    const existingTask: Task | undefined = await TaskService.find(req.params.id);

    if (existingTask) {
      const updatedTask = await TaskService.update(req.params.id, taskUpdate);
      return res.status(200).json(updatedTask);
    }

    const newTask = await TaskService.create(taskUpdate);

    res.status(201).json(newTask);
  } catch (e: any) {
    res.status(500).send(e?.message);
  }
}

export const removeTask = async (req: Request, res: Response) => {
  try {
    const task: Task | null = await TaskService.remove(req.params.id);

    if (task) {
      return res.status(200).json(task);
    }
    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e?.message);
  }
}