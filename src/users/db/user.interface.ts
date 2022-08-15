import { Document } from "mongoose";

export interface Iuser extends Document {
    name: string;
    lastname: string;
    date_naiss: string;
    email: string;
    password: string;
    profil_img: string;
    active: boolean;
}