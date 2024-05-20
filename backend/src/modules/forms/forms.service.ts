import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './schemas/form.schema';

@Injectable()
export class FormsService {
  constructor(@InjectModel(Form.name) private formModel: Model<Form>) {}

  async create(createFormDto: any): Promise<Form> {
    const createdForm = new this.formModel(createFormDto);
    return createdForm.save();
  }

  async findAll(): Promise<Form[]> {
    return this.formModel.find().exec();
  }
}
