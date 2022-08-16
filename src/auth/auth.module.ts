import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import {MailModule} from "../mail/mail.module";
import {AuthGuard} from "./auth.guard";

@Module({
  imports: [UsersModule,MailModule],
  providers: [AuthService,AuthGuard],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
