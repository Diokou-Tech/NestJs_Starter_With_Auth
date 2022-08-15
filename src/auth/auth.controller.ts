import { Body, Controller, Get, Post } from '@nestjs/common';
import { Iuser } from 'src/users/db/user.interface';
import { AuthService } from './auth.service';
import { Session } from './dto/session.type';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Get('register')
    register(@Body() user: Iuser) : Promise<Iuser>
    {
        return this.authService.register(user);
    }
    @Post('login')
    async login(@Body() login:Iuser): Promise<any>
    {
        
    }

}
