import { Module } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { PlatformController } from './platform.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Platform, PlatformSchema } from './entities/platform.entity';

@Module({
  controllers: [PlatformController],
  providers: [PlatformService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Platform.name,
        schema: PlatformSchema,
      },
    ]),
  ],
})
export class PlatformModule {}
