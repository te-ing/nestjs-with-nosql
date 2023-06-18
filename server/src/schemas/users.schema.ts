import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema({ timestamps: { createdAt: 'created' } })
export class Users {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  team: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
