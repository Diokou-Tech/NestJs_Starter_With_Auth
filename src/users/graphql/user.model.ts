import {Field, ObjectType,ID} from "@nestjs/graphql";

@ObjectType()
export class userModel{
    @Field(type => ID)
    id: string
    @Field()
    name: string
    @Field()
    role: string
    @Field()
    lastname: string
    @Field()
    email: string
    @Field()
    profil_img: string
    @Field()
    active: boolean
    @Field()
    date_naiss: Date
}