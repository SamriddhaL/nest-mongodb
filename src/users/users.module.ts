import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Users, usersSchema } from "src/schema/users.schema";
import { UsersService } from "./users.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Users.name, schema: usersSchema }])

    ],
    providers: [UsersService]
})
export class UsersModule{}