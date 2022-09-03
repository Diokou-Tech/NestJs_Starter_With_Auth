import {Args, Mutation, Resolver} from "@nestjs/graphql";
import {authModel} from "./auth.model";
import {loginInput} from "./login.input";
import {AuthService} from "../auth.service";
import {registerInput} from "./register.input";
import {Iuser} from "../../users/db/user.interface";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('school')
@Resolver()
export  class AuthResolver {
    constructor(private readonly authService:AuthService) {}

    @Mutation(returns => authModel)
    async login (@Args({name: 'loginInput', type: ()=> loginInput}) credentials)
    {
        const session = await this.authService.login(credentials);
        return session;
    }
    @Mutation(returns => authModel)
    async register(@Args({name:'registerInput',type: ()=> registerInput}) userRegister:Iuser)
    {
        const result = await this.authService.register(userRegister);
        return result;
    }
}