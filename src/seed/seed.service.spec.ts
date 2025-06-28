import { Test, TestingModule } from '@nestjs/testing';
import { SeedService } from './seed.service';

const mockModel = {};

describe('SeedService', () => {
  let service: SeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SeedService,
        { provide: 'ProductModel', useValue: mockModel },
        { provide: 'SaleModel', useValue: mockModel },
        { provide: 'PlatformModel', useValue: mockModel },
      ],
    }).compile();

    service = module.get<SeedService>(SeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
