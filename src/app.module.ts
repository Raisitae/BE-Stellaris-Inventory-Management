import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [ProductsModule, SalesModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
