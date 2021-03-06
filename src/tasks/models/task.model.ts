import { Schema, model, Model, Document } from "mongoose";
import { IBaseTask } from "../interfaces/task.interface";

interface TaskDocument extends Document {
  title: string;
  description: string;
  done: boolean;
}

interface TaskModel extends Model<TaskDocument> {
  build(attr: IBaseTask): TaskDocument
}

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 90
  },
  done: {
    type: Boolean,
    required: true,
  },
}, {
  versionKey: false,
  timestamps: false
});

taskSchema.statics.build = (attr: IBaseTask) => {
  return new Task(attr);
}

const Task = model<TaskDocument, TaskModel>("Task", taskSchema);

export default Task;
