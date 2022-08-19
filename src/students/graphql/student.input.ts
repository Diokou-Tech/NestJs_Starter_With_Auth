import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class studentInput {
    @Field()
    name: string;
    @Field()
    matricule: string;
    @Field()
    lastname:string;
    @Field()
    date_naiss: Date;
    @Field()
    sexe: string;
    @Field({nullable: true})
    classe_id: string;
}