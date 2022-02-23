import { Schema, model, Model, Document } from "mongoose";
import { IBaseUser } from "../interfaces/user.interface";

interface UserDocument extends Document {
  username: string;
  email: string;
  password: boolean;
  roles: Array<any>;
}

interface UserModel extends Model<UserDocument> {
  build(attr: IBaseUser): UserDocument
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{
    ref: "Role",
    type: Schema.Types.ObjectId
  }]
}, {
  versionKey: false,
  timestamps: false
});

userSchema.statics.build = (attr: IBaseUser) => {
  return new User(attr);
}

const User = model<UserDocument, UserModel>("User", userSchema);

export default User;
