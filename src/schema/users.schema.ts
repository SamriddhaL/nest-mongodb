import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Users {
    @Prop({required: true, unique: true})
    username: string

    @Prop({unique: true})
    displayname: string

    @Prop()
    avatarUrl: string
}

export const usersSchema = SchemaFactory.createForClass(Users)