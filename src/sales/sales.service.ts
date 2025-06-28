import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Sale } from './entities/sale.entity';
import { CreateSaleDto, UpdateSaleDto } from './dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../products/entity/product.entity';

@Injectable()
export class SalesService {
  private sales: Sale[];
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product>,
    @InjectModel(Sale.name)
    private readonly saleModel: Model<Sale>,
  ) {}

  async createSale(createSaleDto: CreateSaleDto) {
    try {
      const sale = await this.saleModel.create({
        ...createSaleDto,
        date: new Date(),
      });

      if (sale) {
        if (createSaleDto.products && Array.isArray(createSaleDto.products)) {
          for (const product of createSaleDto.products) {
            await this.productModel.findOneAndUpdate(
              { _id: product.productId },
              { $inc: { stock: -product.quantity } },
            );
          }
        }
      }
      return sale;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async findAll() {
    return this.saleModel.find().exec();
  }

  async findOneById(_id: string) {
    const sale = await this.saleModel.findById(_id);
    if (!sale) {
      throw new NotFoundException(`Sale with id '${_id}' not found.`);
    }
    return sale;
  }

  async updateSale(_id: string, updateSaleDto: UpdateSaleDto) {
    const sale = await this.findOneById(_id);

    if (updateSaleDto.id && updateSaleDto.id !== _id) {
      throw new BadRequestException('Sale id is not valid inside body');
    }

    await this.saleModel.findByIdAndUpdate(_id, updateSaleDto, { new: true });

    return { ...sale.toJSON(), ...updateSaleDto };
  }

  async deleteSale(_id: string) {
    const deletedCount = await this.saleModel.deleteOne({ _id });
    if (deletedCount.deletedCount === 0)
      throw new NotFoundException(`Sale with id '${_id}' not found.`);
    return { message: 'Sale deleted successfully.' };
  }
}
