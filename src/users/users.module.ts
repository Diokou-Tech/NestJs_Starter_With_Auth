import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userModelName } from './db/user.model-name';
import { userSchema } from './db/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {AuthModule} from "../auth/auth.module";
import {AuthService} from "../auth/auth.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: userModelName,schema: userSchema}]),
    ],
    exports: [UsersService],
    providers : [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
