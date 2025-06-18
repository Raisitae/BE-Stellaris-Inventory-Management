import { IsNumber, IsString, MinLength, IsOptional, IsIn } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly description?: string;

    @IsString()
    @IsOptional()
    readonly imageUrl?: string;

    @IsString()
    readonly categoryId: string;

    @IsString()
    readonly platformId: string;

    @IsNumber()
    readonly price: number;

    @IsNumber()
    readonly stock: number;

    @IsIn(['nuevo', 'usado', 'reacondicionado'])
    readonly status: 'nuevo' | 'usado' | 'reacondicionado';

    @IsString()
    @MinLength(1)
    readonly internCode: string;
}