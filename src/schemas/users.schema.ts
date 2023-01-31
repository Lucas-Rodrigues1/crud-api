
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<users>;

@Schema()
export class users {
  @Prop()
  name: string;
}

export const UsersSchema = SchemaFactory.createForClass(users);