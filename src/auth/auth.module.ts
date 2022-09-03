import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import {AuthResolver} from "./graphql/auth.resolver";

@Module({
  imports: [UsersModule],
  providers: [AuthService,AuthResolver],
  controllers: [AuthController]
})
export class AuthModule {}
