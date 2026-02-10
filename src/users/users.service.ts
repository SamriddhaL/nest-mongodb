import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Users } from "src/schema/users.schema";
import { CreateUserDto } from "./dto/CreateUser.dto";

@Injectable()
export class UsersService{
    constructor(@InjectModel(Users.name) private UserModel: Model<Users>  ){}

    async createUser(createUserDto: CreateUserDto){
        const newUser = await new this.UserModel(createUserDto)
        return newUser.save()
    }

    async getUsers(){
        return await this.UserModel.find()
    }

    async getUserById(id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new NotFoundException()
        const user = await this.UserModel.findById(id)
        if (!user) throw new NotFoundException()
        return user
    }
}