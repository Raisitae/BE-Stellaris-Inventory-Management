import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsUUID()
  readonly id: string;
}
