import {
  IsArray,
  IsDate,
  IsNumber,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { SaleItem } from '../entities/saleItem.entity';

export class CreateSaleDto {
  @IsDate()
  readonly date: Date;

  @IsNumber()
  readonly total: number;

  @IsString()
  @MinLength(1)
  readonly clientName: string;

  @IsArray()
  @ValidateNested({ each: true })
  readonly products: SaleItem[];
}
