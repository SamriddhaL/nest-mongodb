import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class UserSettings{
    @Prop()
    getEmail: boolean

    @Prop()
    getSms: boolean

    @Prop()
    getNotification: boolean
}


export const UserSettingsSchema = SchemaFactory.createForClass(UserSettings)