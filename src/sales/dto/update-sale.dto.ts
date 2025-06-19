import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleDto } from './create-sale.dto';
import { IsUUID } from 'class-validator';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
  @IsUUID()
  readonly id: string;
}
