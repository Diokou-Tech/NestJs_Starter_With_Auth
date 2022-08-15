import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Iuser } from './db/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    // constructor injects servicesUsers
    constructor(private readonly usersService: UsersService){}
    // functions of controllers
    @Get()
    async findAll() {
        let result = await this.usersService.findAll();
        return result;
    }
    @Post()
    async insert(@Body() user :Iuser,@Res() res){
        try{
            let result = await this.usersService.insertOne(user);
           res.send(result);
        }catch(err){
            res.status(422).send(err.message);
        }
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.usersService.findOne(id);
    }
    @Put(':id')
    async updateOne(@Body() user:Iuser,@Param('id') id:string,@Res() res){
        let result = await this.usersService.updateOne(id,user);  
        res.send(result);
    }
    @Delete(':id')
    async deleteOne(@Param('id') id:string,@Res() res){
        let result = await this.usersService.deleteOne(id);
        let msg = result.deletedCount > 0 ? "Suppresion de l'utilsteur avec succès !" : "Erreur de suppression de l'utilisateur !";
        let statut = Boolean(result.deletedCount);
        res.send({ statut , msg });
    }
}
