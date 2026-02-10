import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Users } from "src/schema/users.schema";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";

@Injectable()
export class UsersService{
    constructor(@InjectModel(Users.name) private userModel: Model<Users>  ){}

    async createUser(createUserDto: CreateUserDto){
        const newUser = await new this.userModel(createUserDto)
        return newUser.save()
    }

    async getUsers(){
        return await this.userModel.find()
    }

    async getUserById(id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new NotFoundException()
        const user = await this.userModel.findById(id)
        if (!user) throw new NotFoundException()
        return user
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    }

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }
}