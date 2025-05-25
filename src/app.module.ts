import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [ProductsModule, SalesModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
