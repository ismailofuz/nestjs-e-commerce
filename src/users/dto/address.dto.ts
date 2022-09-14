import { IsString } from "class-validator";

export class AddressDto {
    @IsString()
    country: string;

    @IsString()
    region: string;

    @IsString()
    district: string;

    @IsString()
    street: string;

    @IsString()
    zip_code: string;
}
