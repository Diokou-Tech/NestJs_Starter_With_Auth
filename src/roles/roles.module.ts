import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {roleModelName} from "./db/role.model-name";
import {roleSchema} from "./db/role.schema";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [
      MongooseModule.forFeature([{name: roleModelName, schema: roleSchema}]),
      AuthModule,
  ],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
