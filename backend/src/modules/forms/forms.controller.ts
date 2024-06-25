import { Controller, Post, Body, Get } from '@nestjs/common';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post('/create')
  async createForm(@Body() form: any): Promise<any> {
    return await this.formsService.create(form);
  }

  @Post('/get-list-of-forms')
  async getListOfForms(): Promise<any> {
    return await this.formsService.findAll();
  }

  @Post('/delete')
  async delete(@Body() body: object): Promise<any> {
    return await this.formsService.delete(body['id']);
  }

  @Post('/update')
  async update(@Body() body: object): Promise<any> {
    return await this.formsService.update(body['id'], body['updatedName']);
  }
}
