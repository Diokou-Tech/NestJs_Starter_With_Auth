import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class classesInput {
    @Field()
    code:string;
    @Field()
    nomination:string;
}