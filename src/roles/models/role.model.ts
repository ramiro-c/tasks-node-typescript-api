import { Schema, model, Model, Document } from "mongoose";
import { IBaseRole } from "../interfaces/role.interface";

interface RoleDocument extends Document {
  name: string;
}

interface RoleModel extends Model<RoleDocument> {
  build(attr: IBaseRole): RoleDocument
}

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
}, {
  versionKey: false,
  timestamps: false
});

roleSchema.statics.build = (attr: IBaseRole) => {
  return new Role(attr);
}

const Role = model<RoleDocument, RoleModel>("Role", roleSchema);

export default Role;
