import {Document} from "mongoose";

export interface Iclasse extends Document{
    code:String;
    nomination:String;
}