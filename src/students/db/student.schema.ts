import { Schema } from "mongoose";
import {sexeType} from "../../common/mongoose/sexe.enum";

export const studentSchema = new Schema({
    name: {type: String,required: true,trim: true},
    lastname: {type:String,required: true,trim: true},
    matricule: {type:String,required: true,trim: true,min:8},
    date_naiss : {type:Date,required: true,trim: true},
    sexe: {type:String,enum: ["masculin","feminin"],required: true},
    classe_id: {type:String,required:false}
},{timestamps: true})