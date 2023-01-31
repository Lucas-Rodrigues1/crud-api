import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { users, UsersDocument } from 'src/schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(users.name) private usersModel: Model<UsersDocument>) { }

  async create(createUserDto: CreateUserDto): Promise<users> {
    return new this.usersModel(createUserDto).save()
  }

  async findAll() {
    return this.usersModel.find()
  }

  async findOne(name: string) {
    return this.usersModel.findOne({ name })
  }

  async update(name: string, updateUserDto: UpdateUserDto) {
    return this.usersModel.updateOne({ name }, { $set: { ...updateUserDto } })
  }

  async remove(name: string) {
    const result = await this.usersModel.deleteOne({ name })
    if (result)
      return 'Usuário deletado com sucesso!'
    return result
  }

}
