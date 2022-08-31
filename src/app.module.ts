import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { StudentsModule } from './students/students.module';
import { ClassesModule } from './classes/classes.module';
import { ImageModule } from './image/image.module';

// @ts-ignore
// @ts-ignore
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true
    }),
    MongooseModule.forRoot(process.env.DB_URI_WEB),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: "schema.gql",
      driver: ApolloDriver,
      playground: process.env.APP_MODE == 'dev',
      sortSchema: true
      }),
    UsersModule,
    AuthModule,
    RolesModule,
    StudentsModule,
    ClassesModule,
    ImageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}