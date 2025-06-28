import { Test, TestingModule } from '@nestjs/testing';
import { SalesService } from './sales.service';

const mockModel = {};

describe('SalesService', () => {
  let service: SalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesService,
        { provide: 'SaleModel', useValue: mockModel },
        { provide: 'ProductModel', useValue: mockModel },
      ],
    }).compile();

    service = module.get<SalesService>(SalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
