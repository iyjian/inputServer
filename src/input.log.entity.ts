import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InputLogDocument = HydratedDocument<InputLog>;

@Schema({
  timestamps: true,
})
export class InputLog {
  @Prop({
    index: true,
  })
  machineCode: string;

  @Prop({
    index: true,
  })
  appName: string;

  @Prop({
    index: true,
  })
  appPID: string;

  @Prop()
  windowTitles: string;

  @Prop({
    index: 'text',
  })
  inputs: string;
}

export const InputLogSchema = SchemaFactory.createForClass(InputLog);
