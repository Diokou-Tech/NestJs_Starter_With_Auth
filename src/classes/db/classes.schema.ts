import { Schema } from "mongoose";

export const classeSchema = new Schema({
    code: {type: String,required: true, unique: true, trim: true},
    nomination: {type: String,required: true,unique : true}
},{timestamps: true});