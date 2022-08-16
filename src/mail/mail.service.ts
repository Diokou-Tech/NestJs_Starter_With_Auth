import { Injectable } from '@nestjs/common';
import {MailerService} from "@nestjs-modules/mailer";
import {Iuser} from "../users/db/user.interface";

@Injectable()
export class MailService {
    constructor(private mailerService:MailerService) {}

    async registerEmail(user : Iuser)
    {
        const url = "localhost:3000";
        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Welcome',
            template: './register',
            context: {
                name: user.name,
                url
            }
        });
    }
}
