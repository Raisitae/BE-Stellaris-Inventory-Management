import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductsModule } from '../products/products.module';
import { SalesModule } from '../sales/sales.module';
import { PlatformModule } from '../platform/platform.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProductsModule, SalesModule, PlatformModule],
})
export class SeedModule {}
