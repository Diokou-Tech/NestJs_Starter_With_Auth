import { Injectable } from '@nestjs/common';
import { Iuser } from 'src/users/db/user.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService){}

    register(user:Iuser){
        try{
            let result =  this.userService.insertOne(user);
            return result;
        }catch(error){
            return error;
        }
    }
    login(){

    }
    verifToken(){

    }
    createToken(){

    }
}
