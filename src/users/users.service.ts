import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Users } from "src/schema/users.schema";

@Injectable()
export class UsersService{
    constructor(@InjectModel(Users.name) private UserModel: Model<Users>  ){}
}