import {Body, Controller, Post, Res} from '@nestjs/common';
import { ApiBody, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Iuser } from 'src/users/db/user.interface';
import { AuthService } from './auth.service';
import { Session } from './dto/session.type';

@ApiTags('school')
@ApiSecurity('basic')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('register')
    async register(@Body() user: Iuser,@Res() res) : Promise<any>
    {
        console.log(user);
        try{
            const result = this.authService.register(user);
            res.send(result);
        }catch(e){
            res.status(422).send(e.message);
        }
    }
    @Post('login')
    async login(@Body() login:Iuser,@Res() res): Promise<any>
    {
        try{
            const result = await this.authService.login(login);
            res.send({ status : true , result});
        }catch (e) {
            console.log(e.message);
            res.send({ status : false, error: e.message });
        }
    }

}
