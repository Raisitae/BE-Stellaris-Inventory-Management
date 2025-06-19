import {
  IsArray,
  IsDate,
  IsNumber,
  IsString,
  IsUUID,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { SaleItem } from '../entities/saleItem.entity';

export class CreateSaleDto {
  @IsUUID()
  uuid: string;

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
