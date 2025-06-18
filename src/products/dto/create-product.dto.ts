import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    readonly name: string;

    @IsNumber()
    readonly price: number;
}