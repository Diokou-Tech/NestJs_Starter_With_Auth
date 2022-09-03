import { Injectable } from '@nestjs/common';
import {studentModelName} from "./db/student.model-name";
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import {Istudent} from "./db/student.interface";
import {paginatedInput} from "../common/graphql/paginated.input";
import {normalizePagination} from "../common/helpers/helpers";

@Injectable()
export class StudentsService {
    constructor(@InjectModel(studentModelName) private model:Model<Istudent>) {}

    insertOne(student:Istudent)
    {
        return this.model.create(student);
    }
    findAll(paginated : paginatedInput)
    {
        const {limit,skip,sortBy} = normalizePagination(paginated);
        console.log({"sortby": sortBy});
        console.log('${sortBy.property}');
    }
    findOne(id:string){
        return this.model.findOne({"_id":id});
    }
    updateOne(id:string,student:Istudent)
    {
        return this.model.updateOne({"_id": id},{$set: student});
    }
    deleteOne(id:string)
    {
        return this.model.deleteOne({"_id":id});
    }
}
