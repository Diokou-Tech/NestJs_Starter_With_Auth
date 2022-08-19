import {Field, InputType} from "@nestjs/graphql";
import {RoleType} from "../../roles/db/role.enum";

@InputType()
export class UserInput{
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
