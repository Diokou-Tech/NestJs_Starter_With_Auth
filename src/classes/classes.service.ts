import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {classeModelName} from "./db/classes.model-name";
import {Model} from "mongoose";
import {Iclasse} from "./db/classes.interface";

@Injectable()
export class ClassesService {
    constructor(@InjectModel(classeModelName) private model:Model<Iclasse>) {}

    findAll()
    {
        return this.model.find();
    }
    insertOne(classe:Iclasse)
    {
        return this.model.create(classe);
    }
    findOne(id:string)
    {
        return this.model.findOne({"_id": id});
    }
    deleteOne(id:string)
    {
        return this.model.deleteOne({"_id" : id});
    }
    updateOne(id:string,classe:Iclasse){
        return this.model.updateOne({"_id": id},{ $set: classe });
    }
}
