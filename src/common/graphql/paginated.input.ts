import {Field, InputType,Int} from "@nestjs/graphql";

@InputType()
export class paginatedInput {
    @Field(type => Int,{ nullable: true})
    limit: number;
    @Field(type => Int,{ nullable: true})
    skip:number
}