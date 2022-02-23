import { IBaseRole } from "../../roles/interfaces/role.interface";

export interface IBaseUser {
  username: string;
  email: string;
  password: string;
  roles: Array<any>;
}

export interface IUser extends IBaseUser {
  _id: string;
}