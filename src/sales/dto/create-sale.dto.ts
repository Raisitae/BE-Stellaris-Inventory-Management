import {
  IsArray,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { SaleItem } from '../entities/saleItem.entity';

export class CreateSaleDto {
  @IsOptional()
  @IsDate()
  readonly date: Date;

  @IsNumber()
  readonly total: number;

  @IsString()
  @MinLength(1)
  readonly clientName: string;

  @IsArray()
  readonly products: SaleItem[];
}
