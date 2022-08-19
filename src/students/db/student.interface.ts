import {Document} from 'mongoose';

export interface Istudent extends Document {
    matricule:string;
    name: string;
    lastname:string;
    date_naiss: Date;
    sexe:string;
    classe_id: string;
}