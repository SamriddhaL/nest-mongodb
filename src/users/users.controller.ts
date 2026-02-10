import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController{
    constructor(private userService: UsersService){}
    
    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto)
    }
}