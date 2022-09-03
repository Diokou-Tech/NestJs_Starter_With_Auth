import { Field, ObjectType,ID } from "@nestjs/graphql";
import { sexeType } from "src/common/mongoose/sexe.enum";

@ObjectType()
export class studentModel{
    @Field(type => ID,{nullable:true})
    id: string;
    @Field({nullable:true})
    matricule: string;
    @Field({nullable:true})
    name: string;
    @Field({nullable:true})
    lastname: string;
    @Field({nullable:true})
    date_naiss: Date;
    @Field({nullable:true})
    sexe: string
    @Field({nullable:true})
    classe_id: string
    @Field({nullable:true})
    createdAt: Date
    @Field({nullable:true})
    updatedAt: Date
}