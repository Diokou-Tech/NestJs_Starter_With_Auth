import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class RoleModel{
    @Field(type => ID)
    id: string
    @Field()
    name: string
    @Field()
    description: string
    @Field()
    createdAt: Date
    @Field()
    updatedAt: Date

}