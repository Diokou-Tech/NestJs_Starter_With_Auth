import { Field, ObjectType,ID } from "@nestjs/graphql";
import { sexeType } from "src/common/mongoose/sexe.enum";

@ObjectType()
export class studentModel{
    @Field(type => ID)
    id: string;
    @Field({nullable:true})
    matricule: string;
    @Field()
    name: string;
    @Field()
    lastname: string;
    @Field()
    date_naiss: Date;
    @Field()
    sexe: string
    @Field()
    classe_id: string
    @Field()
    createdAt: Date
    @Field()
    updatedAt: Date
}