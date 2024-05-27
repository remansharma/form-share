import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './schemas/admin.schema';

@Injectable()
export class AdminsService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async create(admin: any): Promise<Admin> {
    const createdAdmin = new this.adminModel(admin);
    return createdAdmin.save();
  }

  async findOneByEmail(email: string): Promise<Admin> {
    return await this.adminModel
      .findOne<Admin>({
        email: email,
      })
      .lean();
  }

  async findOneById(id: number): Promise<Admin> {
    return await this.adminModel.findOne<Admin>({ where: { id } });
  }
}
