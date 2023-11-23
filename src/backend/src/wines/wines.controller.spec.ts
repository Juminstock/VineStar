import { Test, TestingModule } from '@nestjs/testing';
import { WinesController } from './wines.controller';
import { WinesService } from './wines.service';

describe('WinesController', () => {
  let controller: WinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WinesController],
      providers: [WinesService],
    }).compile();

    controller = module.get<WinesController>(WinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
