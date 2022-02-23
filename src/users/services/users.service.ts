/**
 * Data Model Interfaces
 */
import { IBaseUser, IUser } from "../interfaces/user.interface";
import { IUsers } from "../interfaces/users.interface";
import User from "../models/user.model";
/**
 * Service Methods
 */
export const findAll = async (): Promise<IUsers> => User.find();

export const find = async (id: string): Promise<IUser | null> => User.findById(id);

export const create = async (newUser: IBaseUser): Promise<IUser> => User.create(newUser);

export const update = async (id: string, userUpdate: IBaseUser): Promise<IUser | null> => {
  const user = User.findByIdAndUpdate({ _id: id }, userUpdate);

  if (!user) {
    return null;
  }

  return user;
};

export const remove = async (id: string): Promise<IUser | null> => {
  const user = User.findByIdAndDelete(id);

  if (!user) {
    return null;
  }

  return user;
};