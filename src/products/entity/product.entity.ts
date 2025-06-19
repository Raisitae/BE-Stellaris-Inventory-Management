import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuid } from 'uuid';

@Schema()
export class Product extends Document {
  @Prop({ type: String, default: () => uuid() })
  declare _id: string;
  @Prop()
  name: string;
  @Prop()
  description?: string;
  @Prop()
  imageUrl?: string;
  @Prop()
  categoryId: string;
  @Prop()
  platformId: string;
  @Prop()
  price: number;
  @Prop()
  stock: number;
  @Prop()
  status: 'nuevo' | 'usado' | 'reacondicionado';
  @Prop()
  internCode: string;
}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
