import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WineDocument = HydratedDocument<Wine>;

@Schema({
  timestamps: true,
})
export class Wine {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  region: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  image: string;
}

export const WineSchema = SchemaFactory.createForClass(Wine);
