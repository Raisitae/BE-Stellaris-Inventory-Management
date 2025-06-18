import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductsModule } from 'src/products/products.module';
import { SalesModule } from 'src/sales/sales.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProductsModule, SalesModule]
})
export class SeedModule {}
