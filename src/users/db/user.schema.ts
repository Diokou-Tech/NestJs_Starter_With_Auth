import { Schema } from "mongoose";

export const userSchema = new Schema({
    name: {type: String, required : [true, 'le champ name est obligatoire '], min: 2},
    lastname: {type: String, required : true, min:2},
    email: {type: String,required : true, unique :true, trim: true},
    password: {type: String, required : true},
    role:{type: String, enum : ['ADMIN','USER'], default : 'USER'},
    active: {type: Boolean, default : true},
    carte_cni: {type: String, required : false},
    date_naiss: {type: Date, required : false},
    profil_img:{type: String, required : false},
},{ timestamps: true });