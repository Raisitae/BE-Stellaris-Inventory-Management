import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false, timestamps: true })
export class Platform extends Document {
  @Prop({ type: String, required: true, unique: true })
  declare _id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  manufacturer?: string;

  @Prop()
  releaseYear?: number;

  @Prop({ type: [String], default: [] })
  compatibleWith?: string[];

  @Prop()
  region?: string;
}

export type PlatformDocument = Platform & Document;
export const PlatformSchema = SchemaFactory.createForClass(Platform);
