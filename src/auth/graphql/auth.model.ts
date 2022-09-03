import {Field, ObjectType} from "@nestjs/graphql";
import {userModel} from "../../users/graphql/user.model";

@ObjectType()
export class  authModel {
    @Field()
    user: userModel
    @Field()
    token: string
}