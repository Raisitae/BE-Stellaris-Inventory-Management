import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sale, SaleSchema } from './entities/sale.entity';
import { ProductsModule } from '../products/products.module';

@Module({
  controllers: [SalesController],
  providers: [SalesService],
  exports: [MongooseModule],
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      {
        name: Sale.name,
        schema: SaleSchema,
      },
    ]),
  ],
})
export class SalesModule {}
