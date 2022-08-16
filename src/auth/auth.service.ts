import { Injectable } from '@nestjs/common';
import { Iuser } from 'src/users/db/user.interface';
import { UsersService } from 'src/users/users.service';
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import {Session} from './dto/session.type';
import {MailService} from "../mail/mail.service";
import {rejects} from "assert";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly mailService:MailService){}

    async register(data:Iuser){
        try{
            //send emaim to user
            this.mailService.registerEmail(data);
            const user =  await this.userService.insertOne(data);
            const session = this.createToken(user);
            return session;
        }catch(error){
            return error;
        }
    }
   async login(login : Iuser) : Promise<Session>{
    //verif email user exists
        let user = await this.userService.findOneByEmail(login.email);
        console.log(user);
        if(user){
            let isMatch = await bcrypt.compare(login.password,user.password);
            if(isMatch && user.active){
                const session = await this.createToken(user);
                return session;
            }else{
                throw new Error('Identiants incorrectes ou compte désactivé ')
            }
        }else{
            throw new Error('Adresse electronique introuvable !');
        }
    }
    async verifToken(token:string):  Promise<Boolean | Iuser> {
        /*const tokenValid = await jwt.verify(token,process.env.KEY_SECRET_TOKEN);
        return tokenValid;*/
        return new Promise<Boolean | Iuser>((resolve,reject) =>{
            //verify token is valid
            jwt.verify(token,process.env.KEY_SECRET_TOKEN,(err,data) => {
                if(err){
                    resolve(false);
                }else{
                    console.log(data);
                    resolve(data);
                }
            })
        });
    }
    async createToken(login) : Promise<Session> {
    let user = {...login.toObject()}
    delete user.password;
    let token = await jwt.sign({user},process.env.KEY_SECRET_TOKEN,{expiresIn : "3h"});
    return {user,token}
    }
}
