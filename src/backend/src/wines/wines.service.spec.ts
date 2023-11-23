import { Test, TestingModule } from '@nestjs/testing';
import { WinesService } from './wines.service';

describe('WinesService', () => {
  let service: WinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WinesService],
    }).compile();

    service = module.get<WinesService>(WinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
