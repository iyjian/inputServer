import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InputLog } from './input.log.entity';

@Controller()
export class AppController {
  constructor(
    @InjectModel(InputLog.name) private readonly inputLogModel: Model<InputLog>,
  ) {}

  @Post()
  saveInputLog(
    @Body()
    payload: {
      machineCode: string;

      appName: string;

      appPID: string;

      windowTitles: string;

      inputs: string;
    },
  ) {
    return this.inputLogModel.create(payload);
  }
}
