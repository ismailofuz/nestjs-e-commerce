import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsString, ValidateNested } from "class-validator";

export class RegisterDto {
    @ApiProperty()
    @IsString()
    first_name: string
    
    @ApiProperty()
    @IsString()
    last_name: string;

    @ApiProperty()
    @IsBoolean()
    isSeller: boolean;

    @ApiProperty()
    @IsString()
    middle_name: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsString()
    password: string;
}
