import {
  IsNumber,
  IsString,
  MinLength,
  IsOptional,
  IsIn,
  Min,
  IsPositive,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @IsUUID()
  uuid: string;

  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsOptional()
  readonly imageUrl?: string;

  @IsString()
  @MinLength(1)
  readonly categoryId: string;

  @IsString()
  @MinLength(1)
  readonly platformId: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  readonly price: number;

  @IsNumber()
  @IsPositive()
  @Min(1)
  readonly stock: number;

  @IsIn(['nuevo', 'usado', 'reacondicionado'])
  readonly status: 'nuevo' | 'usado' | 'reacondicionado';

  @IsString()
  @MinLength(1)
  readonly internCode: string;
}
