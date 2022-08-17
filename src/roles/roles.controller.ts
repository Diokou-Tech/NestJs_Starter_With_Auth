import {Body, Controller, Get, Post, Res, Param, UseGuards} from '@nestjs/common';
import {Irole} from "./db/role.interface";
import {RolesService} from "./roles.service";
import {AuthGuard} from "../auth/auth.guard";
import {CurrentUser} from "../decorators/current-user.decorator";

@UseGuards(AuthGuard)
@Controller('roles')
export class RolesController {
    constructor(private serviceRole: RolesService) {}

    @Get()
    async findAll(@Res() res,@CurrentUser() user:any )
    {
        console.log(user);
        let roles = await this.serviceRole.findAll();
        res.send(roles);
    }
    @Post()
    async insertOne(@Body() role:Irole)
    {
        let result = await this.serviceRole.insertOne(role);
        return result;
    }
    @Get(':id')
    async findOne(@Param('id') id:string)
    {
        let role = await this.serviceRole.findOne(id);
        return role;
    }
}
