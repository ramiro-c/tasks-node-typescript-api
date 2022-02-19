/**
 * Data Model Interfaces
 */
import { BaseTask, Task } from "../interfaces/task.interface";
import { Tasks } from "../interfaces/tasks.interface";
import { nanoid } from "nanoid";

/**
 * In-Memory Store
 */
let tasks: Tasks = [
  {
    id: "1",
    title: "Burger",
    description: "Tasty",
    done: false
  },
  {
    id: "2",
    title: "Pizza",
    description: "Cheesy",
    done: false
  },
  {
    id: "3",
    title: "Tea",
    description: "Informative",
    done: false
  }
];

/**
 * Service Methods
 */
export const findAll = async (): Promise<Task[]> => Object.values(tasks);

export const find = async (id: string): Promise<Task | undefined> => tasks.find(t => t.id === id);

export const create = async (newTask: BaseTask): Promise<Task> => {
  const id = nanoid();

  tasks.push({
    id: nanoid(),
    ...newTask,
  });

  return { id, ...newTask };
};

export const update = async (
  id: string,
  taskUpdate: BaseTask
): Promise<Task | null> => {
  const task = await find(id);

  if (!task) {
    return null;
  }

  tasks = tasks.map(t => t.id === id ? { id, ...taskUpdate } : t);

  return { id, ...taskUpdate };
};

export const remove = async (id: string): Promise<null | Task> => {
  const task = await find(id);

  if (!task) {
    return null;
  }

  tasks = tasks.filter(t => t.id !== id);

  return task;
};