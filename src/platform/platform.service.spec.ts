import { Test, TestingModule } from '@nestjs/testing';
import { PlatformService } from './platform.service';

const mockModel = {};

describe('PlatformService', () => {
  let service: PlatformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlatformService,
        { provide: 'PlatformModel', useValue: mockModel },
      ],
    }).compile();

    service = module.get<PlatformService>(PlatformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
