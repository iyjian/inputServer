import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InputLog, InputLogSchema } from './input.log.entity';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://mongodb:27017/inputLog`,
      }),
    }),
    MongooseModule.forFeature([
      { name: InputLog.name, schema: InputLogSchema },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
