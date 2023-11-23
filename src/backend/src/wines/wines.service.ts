import { Injectable } from '@nestjs/common';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
import { WineRepository } from './wines.repository';

@Injectable()
export class WinesService {
  constructor(private readonly wineRepository: WineRepository) {}

  create(createWineDto: CreateWineDto) {
    return this.wineRepository.save(createWineDto);
  }

  findAll() {
    return this.wineRepository.findAll();
  }

  findOne(id: string) {
    return this.wineRepository.findOne(id);
  }

  update(id: string, updateWineDto: UpdateWineDto) {
    return this.wineRepository.update(id, updateWineDto);
  }

  remove(id: string) {
    return this.wineRepository.remove(id);
  }
}
