import { Injectable } from '@nestjs/common';
import { PRODUCT_SEED } from './data/products.seed';
import { SALES_SEED } from './data/sales.seed';
import { PLATFORM_SEED } from './data/platforms.seed';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../products/entity/product.entity';
import { Sale } from '../sales/entities/sale.entity';
import { Platform } from '../platform/entities/platform.entity';
@Injectable()
export class SeedService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product>,
    @InjectModel('Sale')
    private readonly saleModel: Model<Sale>,
    @InjectModel('Platform')
    private readonly platformModel: Model<Platform>,
  ) {}

  async executeSeed() {
    const deleteArray: Promise<any>[] = [];
    deleteArray.push(
      this.productModel.deleteMany({}),
      this.saleModel.deleteMany({}),
      this.platformModel.deleteMany({}),
    );
    await Promise.all(deleteArray);

    const execArray: Promise<any>[] = [];
    execArray.push(
      this.productModel.insertMany(PRODUCT_SEED),
      this.saleModel.insertMany(SALES_SEED),
      this.platformModel.insertMany(PLATFORM_SEED),
    );

    await Promise.all(execArray);

    return {
      message: 'Seed executed successfully',
      products: execArray ? [0].length : 0,
      sales: execArray ? [1].length : 0,
      platforms: execArray ? [2].length : 0,
    };
  }
}
