import {Body, Controller, Param, Post, Res} from '@nestjs/common';
import { Iuser } from 'src/users/db/user.interface';
import { AuthService } from './auth.service';
import { Session } from './dto/session.type';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('register')
    async register(@Body() user: Iuser) : Promise<Session>
    {
        const result = this.authService.register(user);
        return result;
    }
    @Post('login')
    async login(@Body() login:Iuser,@Res() res): Promise<any>
    {
        try{
            const result = await this.authService.login(login);
            res.send({ status : true , result});
        }catch (e) {
            res.status(422).send({ status : false, error: e.message });
        }
    }

}
