import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Users, usersSchema } from "src/schema/users.schema";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UserSettings, UserSettingsSchema } from "src/schema/UserSettings.schema";

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {name: Users.name, schema: usersSchema },
                {name: UserSettings.name, schema: UserSettingsSchema}
            ])

    ],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule{}