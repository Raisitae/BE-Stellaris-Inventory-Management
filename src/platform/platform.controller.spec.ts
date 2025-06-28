import { Test, TestingModule } from '@nestjs/testing';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';

describe('PlatformController', () => {
  let controller: PlatformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlatformController],
      providers: [
        {
          provide: PlatformService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PlatformController>(PlatformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
