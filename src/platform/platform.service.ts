import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Platform } from './entities/platform.entity';
import { Model } from 'mongoose';

@Injectable()
export class PlatformService {
  constructor(
    @InjectModel(Platform.name)
    private readonly platformModel: Model<Platform>,
  ) {}

  async findAll() {
    return this.platformModel.find().exec();
  }

  async findOneByCode(code: string) {
    const platform = await this.platformModel.findOne({ code: code });
    if (!platform) {
      throw new NotFoundException(`Platform with code '${code}' not found.`);
    }
    return platform;
  }

  async populatePlatformsWithSeedData(platforms: Platform[]) {
    if (platforms.length === 0) {
      throw new BadRequestException('No products to seed');
    }

    try {
      await this.platformModel.deleteMany({});
      const createdPlatforms = await this.platformModel.insertMany(platforms);
      return createdPlatforms;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error seeding products data: ${error}`,
      );
    }
  }
}
