import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SaleItem } from './saleItem.entity';
import { v4 as uuid } from 'uuid';

@Schema()
export class Sale extends Document {
  @Prop({ type: String, default: () => uuid() })
  declare _id: string;
  @Prop()
  date: Date;
  @Prop()
  total: number;
  @Prop()
  clientName: string;
  @Prop()
  products: SaleItem[];
}

export type SaleDocument = Sale & Document;

export const SaleSchema = SchemaFactory.createForClass(Sale);
