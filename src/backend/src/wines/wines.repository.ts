import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateWineDto } from './dto/update-wine.dto';
import { CreateWineDto } from './dto/create-wine.dto';
import { Wine } from './schema/wine.schema';

@Injectable()
export class WineRepository {
  constructor(
    @InjectModel(Wine.name)
    private readonly wineModel: Model<Wine>,
  ) {}

  async findAll(): Promise<Wine[]> {
    return this.wineModel.find().exec();
  }

  async findOne(id: string): Promise<Wine> {
    return this.wineModel.findById(id).exec();
  }

  async save(wineData: CreateWineDto): Promise<Wine> {
    const newWine = new this.wineModel(wineData);
    return newWine.save();
  }

  async update(id: string, wineData: UpdateWineDto): Promise<Wine> {
    return this.wineModel.findByIdAndUpdate(id, wineData, { new: true });
  }

  async remove(id: string): Promise<Wine> {
    return this.wineModel.findByIdAndRemove(id);
  }
}
