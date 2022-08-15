import {Schema} from "mongoose";
import {RoleType} from "./role.enum";

export const roleSchema = new Schema({
    name: {type: String, required: true,enum :RoleType, unique: RoleType.USER},
    description: {type: String,default: "this role is important for manage applications !"}
}, { timestamps: true})