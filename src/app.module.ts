import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PlatformModule } from './platform/platform.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductsModule,
    SalesModule,
    SeedModule,
    MongooseModule.forRoot(process.env.MONGODB_URI || ''),
    PlatformModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
