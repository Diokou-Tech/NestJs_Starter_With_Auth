import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {UsersService} from "../users.service";
import {userModel} from "./user.model";
import {UserInput} from "./user.input";
import {NotFoundException} from "@nestjs/common";
import {Iuser} from "../db/user.interface";
import {MessageModel} from "../../common/graphql/message.model";

@Resolver()
export class UsersResolver{
    constructor(private readonly userService:UsersService) {}

    @Query(returns => [userModel])
    async fetchUsers(){
        const users = await this.userService.findAll();
        return users;
    }
    @Query(returns => userModel)
    async fetchUser(@Args({ name: 'idUser',type: ()=> String} ) id:string){
        const user = await this.userService.findOne(id);
        return user;
    }
    @Mutation(returns => userModel)
    async createUser(@Args({ name: "userInput",type: ()=> UserInput}) user:Iuser)
    {
        const result = await this.userService.insertOne(user);
       return result;
    }
    @Mutation(returns => MessageModel)
    async deleteOneUser(@Args({name: 'id',type: () => String}) idUser:string)
    {
        const result = await this.userService.deleteOne(idUser);
        const message = result.deletedCount > 0 ? "Suppresion de l'utilsteur avec succès !" : "Erreur de suppression de l'utilisateur !";
        const statut = Boolean(result.deletedCount);
        console.log(result);
        return { statut,message};
    }
    @Mutation(returns => MessageModel)
    async updateUser(
        @Args({ name: "user",type: () => UserInput}) user:Iuser,
        @Args({name: 'id',type: ()=> String}) id:string
    )
    {
        const result = await this.userService.updateOne(id,user);
        const message = result.modifiedCount > 0 ? "Modification de l'utilsteur avec succès !" : "Erreur de Modification de l'utilisateur !";
        const statut = Boolean(result.modifiedCount);
        return {statut, message};
    }
}