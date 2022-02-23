// /**
//  * Data Model Interfaces
//  */
// import { IBaseTask, ITask } from "../interfaces/task.interface";
// import { ITasks } from "../interfaces/tasks.interface";
// import Task from "../models/task.model";
// /**
//  * Service Methods
//  */
// export const findAll = async (): Promise<ITasks> => Task.find();

// export const find = async (id: string): Promise<ITask | null> => Task.findById(id);

// export const create = async (newTask: IBaseTask): Promise<ITask> => Task.create(newTask);

// export const update = async (id: string, taskUpdate: IBaseTask): Promise<ITask | null> => {
//   const task = Task.findByIdAndUpdate({ _id: id }, taskUpdate);

//   if (!task) {
//     return null;
//   }

//   return task;
// };

// export const remove = async (id: string): Promise<ITask | null> => {
//   const task = Task.findByIdAndDelete(id);

//   if (!task) {
//     return null;
//   }

//   return task;
// };