import { Controller, Post, Body, Get } from '@nestjs/common';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  async createForm(@Body() form: any): Promise<any> {
    return await this.formsService.create(form);
  }

  @Get()
  async getListOfForms(): Promise<any> {
    return await this.formsService.findAll();
  }
}
