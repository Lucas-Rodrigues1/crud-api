import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { users, UsersSchema } from 'src/schemas/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: users.name, schema: UsersSchema }])],
  controllers: [UsersController,],
  providers: [UsersService]
})
export class UsersModule {}
