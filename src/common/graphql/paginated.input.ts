import {Field, InputType,Int} from "@nestjs/graphql";
import {orderbyInput} from "./orderby.input";

@InputType()
export class paginatedInput {
    @Field(type => Int,{ nullable: true})
    limit: number;
    @Field(type => Int,{ nullable: true})
    skip:number
    @Field(type => orderbyInput,{ nullable: true})
    sortBy:orderbyInput
}