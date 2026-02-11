import { IsNotEmpty, IsString, isString, MaxLength } from "class-validator"

export class createPostsDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    title: string

    @IsString()
    @IsNotEmpty()
    description: string
}