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
        return this.model.findOne({"_id": id});
    }
    async insertOne(user : Iuser){
        //crypt password_text
        const hashPassword = await bcrypt.hash(user.password,10);
        user.password = hashPassword;
        try{
            const result = this.model.create(user);
            return result;
        }catch (e) {
            throw  new Error(e.message);
        }
    }
    deleteOne(id: string){
        console.log("in delete");
        return this.model.deleteOne({'_id': id});
    }
    async updateOne(id: string, user: Iuser){
        const result = await this.model.updateOne({'_id': id},{$set : user});
        console.log(result);
        return result;
    }
}
