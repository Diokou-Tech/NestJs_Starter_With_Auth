import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userModelName } from './db/user.model-name';
import { userSchema } from './db/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {UsersResolver} from "./graphql/users.resolver";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: userModelName,schema: userSchema}])
    ],
    exports: [UsersService],
    providers : [UsersService,UsersResolver],
    controllers: [UsersController]
})
export class UsersModule {}
