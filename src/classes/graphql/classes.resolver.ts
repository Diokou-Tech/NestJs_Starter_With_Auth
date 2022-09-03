import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import {ClassesService} from "../classes.service";
import {classesModel} from "./classes.model";
import {classesInput} from "./classes.input";
import {Iclasse} from "../db/classes.interface";
import {MessageModel} from "../../common/graphql/message.model";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('school')
@Resolver()
export class ClassesResolver {
    constructor(private readonly classeService:ClassesService) {}

    @Query(returns => [classesModel])
    async findClasses(){
       const result = await this.classeService.findAll();
       return result;
    }
    @Mutation(returns => classesModel)
    async createClasse(@Args({name:"classeInput",type: ()=> classesInput }) classe:Iclasse)
    {
        console.log(classe);
        const result = await this.classeService.insertOne(classe);
        return result;
    }
    @Query(returns => classesModel)
    async findClasse(
        @Args({name: 'id',type:()=> String}) id:string
    )
    {
        const result = this.classeService.findOne(id);
        return result;
    }
    @Mutation( returns => MessageModel)
    async updateClasse(
        @Args({name: "id",type:()=> String}) id:string,
        @Args({name: "classe",type:()=> classesInput}) classe:Iclasse,
    )
    {
        const result = await this.classeService.updateOne(id,classe);
        const message = result.modifiedCount ? "Modification de la classe avec succès !" : "Erreur de modification de la classe !";
        const statut = new Boolean(result.modifiedCount);
        console.log(result);
        return {statut,message};
    }
    @Mutation(returns => MessageModel)
    async deleteClasse(
        @Args({name: "id",type:()=> String}) id:string
    )
    {
        const result = await this.classeService.deleteOne(id);
        const message = result.deletedCount ? "Suppression de la classe avec succès !" : "Erreur de suppression de la classe !";
        const statut = new Boolean(result.deletedCount);
        return {statut,message};
    }

}
