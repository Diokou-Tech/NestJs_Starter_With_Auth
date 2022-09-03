import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesResolver } from './graphql/classes.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {classeModelName} from "./db/classes.model-name";
import {classeSchema} from "./db/classes.schema";

@Module({
  providers: [ClassesService, ClassesResolver],
  imports: [
      MongooseModule.forFeature([{name:classeModelName,schema:classeSchema}])
  ]
})
export class ClassesModule {}
