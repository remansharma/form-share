import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Form extends Document {
  @Prop()
  name: string;

  @Prop()
  adminID: string;

  @Prop()
  forms: Array<any>;
}

export const FormSchema = SchemaFactory.createForClass(Form);
