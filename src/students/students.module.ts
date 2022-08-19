import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsResolver } from './graphql/students.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {studentModelName} from "./db/student.model-name";
import {studentSchema} from "./db/student.schema";

@Module({
  imports:[
    MongooseModule.forFeature([{name :studentModelName,schema: studentSchema}])
  ],
  providers: [StudentsService, StudentsResolver]
})
export class StudentsModule {}
