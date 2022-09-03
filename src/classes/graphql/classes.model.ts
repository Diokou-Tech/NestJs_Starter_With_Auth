import {Field, ObjectType,ID} from "@nestjs/graphql";

@ObjectType()
export class classesModel {
    @Field(type => ID,{nullable: true})
    id: string
    @Field({nullable: true})
    code : string
    @Field({nullable: true})
    nomination : string
}