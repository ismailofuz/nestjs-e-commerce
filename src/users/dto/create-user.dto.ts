import { IsEmail, IsString, ValidateNested } from "class-validator";
import { AddressDto } from "./address.dto";

export class CreateUserDto {
    @IsString()
    first_name: string

    @IsString()
    last_name: string;

    @IsString()
    middle_name: string;

    @IsString()
    company: string;

    @IsString()
    @ValidateNested()
    address: AddressDto;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}
