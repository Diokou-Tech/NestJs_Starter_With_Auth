import {Args, Query, Resolver} from "@nestjs/graphql";
import {RolesService} from "./roles.service";
import {Irole} from "./db/role.interface";
import {RoleModel} from "./graphql/role.model";

@Resolver()
export class RolesResolver{
    constructor(private readonly rolesService:RolesService) {
    }
    @Query(returns => [RoleModel])
    async fetchRoles()
    {
        let result = await this.rolesService.findAll();
        return result;
    }
    @Query(returns => RoleModel)
    async fetchOneRole (
        @Args({name: 'id',type:()=> String }) id:string
    )
    {
        const result = await this.rolesService.findOne(id);
        return result;
    }
}