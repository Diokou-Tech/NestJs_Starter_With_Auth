import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {roleModelName} from "./db/role.model-name";
import {roleSchema} from "./db/role.schema";
import {RolesResolver} from "./roles.resolver";

@Module({
  imports: [
      MongooseModule.forFeature([{name: roleModelName, schema: roleSchema}])
  ],
  providers: [RolesService,RolesResolver],
  controllers: [RolesController]
})
export class RolesModule {}
