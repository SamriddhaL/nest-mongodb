import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Users } from "src/schema/users.schema";
import { CreateUserDto } from "./dto/CreateUser.dto";

@Injectable()
export class UsersService{
    constructor(@InjectModel(Users.name) private UserModel: Model<Users>  ){}

    createUser(createUserDto: CreateUserDto){
        const newUser = new this.UserModel(createUserDto)
        return newUser.save()
    }
}