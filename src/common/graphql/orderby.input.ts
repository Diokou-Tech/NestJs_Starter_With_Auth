import {Field, InputType} from "@nestjs/graphql";
import {orderByDirection} from "./order-by-direction.enum";

@InputType()
export  class orderbyInput {
    @Field({nullable: true})
    property:string;
    @Field(type => orderByDirection ,{nullable: true})
    direction: orderByDirection;
}