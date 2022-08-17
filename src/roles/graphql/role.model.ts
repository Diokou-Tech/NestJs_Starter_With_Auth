import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class RoleModel{
    @Field()
    _id: string
    @Field()
    name: string
    @Field()
    description: string
}