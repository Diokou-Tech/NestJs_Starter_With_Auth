import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class MessageModel{
    @Field()
    statut: Boolean
    @Field()
    message: string
}