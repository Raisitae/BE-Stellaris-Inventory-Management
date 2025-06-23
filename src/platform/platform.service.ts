import { Injectable, NotFoundException } from '@nestjs/common';
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
}
