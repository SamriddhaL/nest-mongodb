import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Posts{
    @Prop({isRequired: true})
    title: string

    @Prop({isRequired: true})
    description: string
}

export const postsSchema = SchemaFactory.createForClass(Posts)