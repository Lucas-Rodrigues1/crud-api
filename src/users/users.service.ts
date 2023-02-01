import { HttpException, Injectable } from '@nestjs/common';
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
    const result = this.usersModel.find()
    if (!result)
      return 'Falha ao econtrar usuários'

    return result
  }

  async findOne(name: string) {
    const result = this.usersModel.findOne({ name })
    if (!result)
      return 'Falha ao econtrar usuário'
    return result
  }

  async update(name: string, updateUserDto: UpdateUserDto) {
    const result = this.usersModel.updateOne({ name }, { $set: { ...updateUserDto } })
    if (result)
      return 'Usuário atualizado com sucesso!'
    else
      return 'Falha ao atualizar'
    return result
  }

  async remove(name: string) {
    const result = await this.usersModel.deleteOne({ name })
    if (result)
      return 'Usuário deletado com sucesso!'
    else
      return 'Falha ao deletar'
    return result
  }

}
