import { Type } from "class-transformer"
import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator"

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    displayname: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateUserSettingsDto)
    settings?: string
}

export class CreateUserSettingsDto{
    @IsBoolean()
    getEmail: boolean
    
    @IsBoolean()
    getSms: boolean

    @IsBoolean()
    getNotification: boolean
}