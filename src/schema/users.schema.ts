import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSettings } from "./UserSettings.schema";
import { Posts } from "./Posts.schema";

@Schema()
export class Users {
    @Prop({required: true, unique: true})
    username: string

    @Prop({unique: true})
    displayname: string

    @Prop()
    avatarUrl: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings'})
    settings?: UserSettings

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Posts'}]})
    posts?: Posts[]
}

export const usersSchema = SchemaFactory.createForClass(Users)