export interface BaseTask {
  title: string;
  description: string;
  done: boolean;
}

export interface Task extends BaseTask {
  id: string;
}