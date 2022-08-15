import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iuser } from './db/user.interface';
import { userModelName } from './db/user.model-name';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
    constructor(@InjectModel(userModelName) private model: Model<Iuser>){}

    findAll(){
        return this.model.find().sort({"createdAt": -1});
    }
    findOneByEmail(email: string) {
        return this.model.findOne({"email" : email});
    }
    findOne(id:string){
        return this.model.find({"_id": id});
    }
    async insertOne(user : Iuser){
        //get salt
        const hashPassword = await bcrypt.hash(user.password,10);
        console.log(hashPassword);
        user.password = hashPassword;
        return this.model.create(user);
    }
    deleteOne(id: string){
        return this.model.deleteOne({'_id': id});
    }
    updateOne(id: string, user: Iuser){
        return this.model.updateOne({'_id': id},{$set : user});
    }
}
