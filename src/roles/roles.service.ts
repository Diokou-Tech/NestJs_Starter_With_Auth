import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {roleModelName} from "./db/role.model-name";
import {Model} from "mongoose";
import {Irole} from "./db/role.interface";

@Injectable()
export class RolesService {
    constructor(@InjectModel(roleModelName) private model:Model<Irole>) {}

    insertOne(role){
        return this.model.create(role);
    }
    findAll() {
        return this.model.find();
    }
    findOne(id:string){
        return this.model.findOne({"_id" : id});
    }
    deleteOne(id: string){
        return this.model.deleteOne({"_id": id});
    }
    updateOne(id:string, role:Irole){
        return this.model.updateOne({"_id": id},{$set : role});
    }
}
