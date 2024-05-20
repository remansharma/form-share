import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsService } from './forms.service';
import { Form, FormSchema } from './schemas/form.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]),
  ],
  providers: [FormsService],
})
export class FormsModule {}
