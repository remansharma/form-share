import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsService } from './forms.service';
import { Form, FormSchema } from './schemas/form.schema';
import { FormsController } from './forms.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }]),
  ],
  controllers: [FormsController],
  providers: [FormsService],
})
export class FormsModule {}
