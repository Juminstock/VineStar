import { Module } from '@nestjs/common';
import { WinesService } from './wines.service';
import { WinesController } from './wines.controller';
import { WineRepository } from './wines.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Wine, WineSchema } from './schema/wine.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wine.name, schema: WineSchema }]),
  ],
  controllers: [WinesController],
  providers: [WinesService, WineRepository],
})
export class WinesModule {}
