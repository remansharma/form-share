import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './schemas/form.schema';
import moment from 'moment';

@Injectable()
export class FormsService {
  constructor(@InjectModel(Form.name) private formModel: Model<Form>) {}

  async create(createFormDto: any): Promise<Form> {
    const createdForm = new this.formModel(createFormDto);
    return createdForm.save();
  }

  async findAll(): Promise<Form[]> {

    let listOfForms = this.formModel.find().exec();

    (await listOfForms).forEach(form => {
      let datetime = new Date(form.createdOn);
      datetime.setHours(datetime.getHours() + 5);
      datetime.setMinutes(datetime.getMinutes() + 30);
      form.createdOn = datetime;
    });

    return listOfForms;
  }

  async delete(id): Promise<any> {
   let doc = await this.formModel.deleteOne({"_id": id})   
   return {
    message: "Successfully deleted the form",
    data: doc
   }
  }

  async update(id, updatedName): Promise<any> {
    let doc = await this.formModel.findOne({"_id": id})   
    doc.name = updatedName;
    await doc.save()

    return {
     message: "Successfully updated the form",
     data: doc
    }
   }

}
