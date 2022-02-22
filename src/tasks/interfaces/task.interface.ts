export interface IBaseTask {
  title: string;
  description: string;
  done: boolean;
}

export interface ITask extends IBaseTask {
  _id: string;
}