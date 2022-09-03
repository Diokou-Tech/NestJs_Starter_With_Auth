import {Resolver, Query, Mutation, Args,ID} from '@nestjs/graphql';
import {studentModel} from "./student.model";
import {StudentsService} from "../students.service";
import {studentInput} from "./student.input";
import {Istudent} from "../db/student.interface";
import {MessageModel} from "../../common/graphql/message.model";
import {paginatedInput} from "../../common/graphql/paginated.input";
import {UseGuards} from "@nestjs/common";

//@UseGuards(AuthGuard)
@Resolver()
export class StudentsResolver {
    constructor(private readonly studentsService: StudentsService) {}

    @Mutation(returns => studentModel)
    async createStudent(@Args({name:"studentInput",type: ()=> studentInput}) student:Istudent)
    {
        let result = await this.studentsService.insertOne(student);
        return result;
    }
    @Query(returns => [studentModel])
    async findStudents (
        @Args({name:"paginated", type:()=> paginatedInput, nullable:true}) paginated:paginatedInput
    )
    {
        const result= await this.studentsService.findAll(paginated);
        return result;
    }
    @Query(returns => studentModel)
    async findStudent(@Args({name:"id", type: ()=> String}) id:string)
    {
        const result = await this.studentsService.findOne(id);
        return result;
    }
    @Mutation(returns => MessageModel)
    async deleteStudent(@Args({name: 'id',type: ()=> String}) id:string)
    {
        const result = await this.studentsService.deleteOne(id);
        const message = result.deletedCount ? "Suppression de l'éléve avec succès !" : "Erreur de suppression utilisateur !";
        const statut = new Boolean(result.deletedCount);
        return {statut,message};
    }
    @Mutation(returns => MessageModel)
    async updateStudent(
        @Args({name: 'id',type: ()=> String}) id:string,
        @Args({name: 'student',type: ()=> studentInput}) student:Istudent
    )
    {
        const result = await this.studentsService.updateOne(id,student);
        const message = result.modifiedCount ? "Suppression de l'éléve avec succès !" : "Erreur de suppression utilisateur ou introuvable !";
        const statut = new Boolean(result.modifiedCount);
        return {statut,message};
    }
}
