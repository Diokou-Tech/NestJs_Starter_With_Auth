import {Body, Controller, Get, Post, Res,Param} from '@nestjs/common';
import {Irole} from "./db/role.interface";
import {RolesService} from "./roles.service";
import {Document} from "mongoose";
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('school')
@ApiSecurity('basic')
@Controller('roles')
export class RolesController {
    constructor(private serviceRole: RolesService) {}

    @Get()
    async findAll(@Res() res)
    {
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
