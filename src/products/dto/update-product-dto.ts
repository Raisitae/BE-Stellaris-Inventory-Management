import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly name: string;

  @IsNumber()
  @IsOptional()
  readonly price: number;
}
