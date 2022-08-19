import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class registerInput {
    @Field()
    name: string
    @Field()
    role: string
    @Field()
    lastname: string
    @Field()
    email: string
    @Field()
    password: string
}