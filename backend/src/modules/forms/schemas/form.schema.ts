import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class FormField {
  @Prop()
  label: string;

  @Prop()
  type: string;

  @Prop({ type: [Object] })
  options: { label: string, value: any }[];

  @Prop()
  value: any;
}

const FormFieldSchema = SchemaFactory.createForClass(FormField);

@Schema()
export class Form extends Document {
  @Prop()
  name: string;

  @Prop()
  adminID: string;

  @Prop({ type: [FormFieldSchema] })
  forms: FormField[];

  @Prop({ default: Date.now })
  createdOn: Date;
}

export const FormSchema = SchemaFactory.createForClass(Form);



/*

To support different input types, you can adjust the forms array elements. Here's an example with various input types:


{
  "_id": {
    "$oid": "667b021f588887cb597ad416"
  },
  "name": "Hey there",
  "adminID": "66537b87d0425310097f954d",
  "forms": [
    {
      "label": "Label for text field",
      "type": "text",
      "value": "Sample text"
    },
    {
      "label": "Label for radio buttons",
      "type": "radio",
      "options": [
        { "label": "Option 1", "value": "1" },
        { "label": "Option 2", "value": "2" }
      ]
    },
    {
      "label": "Label for textarea",
      "type": "textarea",
      "value": "Sample text area content"
    },
    {
      "label": "Label for checkbox",
      "type": "checkbox",
      "value": true
    }
  ],
  "createdOn": {
    "$date": "2024-06-25T17:45:03.456Z"
  },
  "__v": 0
}


*/