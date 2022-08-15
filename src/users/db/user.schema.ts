import { Schema } from "mongoose";

export const userSchema = new Schema({
    name: {type: String, required : [true, 'le champ name est obligatoire ']},
    lastname: {type: String, required : true},
    email: {type: String,required : true},
    password: {type: String, required : true},
    carte_cni: {type: String, required : false},
    date_naiss: {type: Date, required : false},
    profil_img:{type: String, required : false},
},{ timestamps: true }); 