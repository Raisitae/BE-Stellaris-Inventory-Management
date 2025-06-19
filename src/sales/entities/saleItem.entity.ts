import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

@Schema()
export class SaleItem extends Document {
  @Prop({ type: String, default: () => uuid() })
  declare _id: string;
  @Prop()
  saleId: string;
  @Prop()
  productId: string;
  @Prop()
  quantity: number;
  @Prop()
  unitPrice: number;
}

export type SaleItemDocument = SaleItem & Document;

export const SaleItemSchema = SchemaFactory.createForClass(SaleItem);
