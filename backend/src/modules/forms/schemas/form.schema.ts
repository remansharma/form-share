import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Form extends Document {
  @Prop()
  name: string;

  @Prop()
  adminID: string;
}

export const FormSchema = SchemaFactory.createForClass(Form);
