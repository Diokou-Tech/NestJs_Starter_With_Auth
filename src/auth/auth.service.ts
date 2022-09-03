import { Injectable } from '@nestjs/common';
import { Iuser } from 'src/users/db/user.interface';
import { UsersService } from 'src/users/users.service';
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import {Session} from './dto/session.type';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService){}

    async register(data:Iuser){
        try{
            const user =  await this.userService.insertOne(data);
            console.log(user);
            const session = this.createToken(user);
            return session;
        }catch(error){
            throw new Error(error.message);
        }
    }
   async login(login : Iuser) : Promise<Session>{
    //verif email user exists
        let user = await this.userService.findOneByEmail(login.email);
        console.log(user);
        if(user){
            let isMatch = await bcrypt.compare(login.password,user.password);
            console.log({isMatch});
            if(isMatch){
                if(user.active){
                    const session = await this.createToken(user);
                    return session;
                }else{
                    throw new Error('Compte desactivé : Contacter l\'administrateur');
                }
            }else{
                throw new Error('Identiants incorrectes !')
            }
        }else{
            throw new Error('Adresse electronique introuvable !');
        }
    }
    async verifToken(token:string){
        const tokenValid = await jwt.verify(token,process.env.KEY_SECRET_TOKEN);
        console.log(tokenValid);
    }
    async createToken(login) : Promise<Session> {
    let user = {...login.toObject()}
    delete user.password;
    let token = await jwt.sign({user},process.env.KEY_SECRET_TOKEN,{expiresIn : "3h"});
    return {user,token}
    }
}
