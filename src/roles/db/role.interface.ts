import {Document} from "mongoose";

export interface Irole extends Document{
    name : string;
    description : string;
}