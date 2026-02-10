import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
    constructor(private userService: UsersService){}
    
    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @Get()
    getUsers(){
        return this.userService.getUsers()
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
        return this.userService.getUserById(id)
    }
}