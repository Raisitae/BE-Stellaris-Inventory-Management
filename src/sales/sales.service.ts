import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Sale } from './entities/sale.entity';
import { CreateSaleDto, UpdateSaleDto } from './dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SalesService {
  private sales: Sale[];
  constructor(
    @InjectModel(Sale.name)
    private readonly saleModel: Model<Sale>,
  ) {}

  async createSale(createSaleDto: CreateSaleDto) {
    try {
      const sale = await this.saleModel.create({
        ...createSaleDto,
        date: new Date(createSaleDto.date),
      });
      return sale;
    } catch {
      throw new BadRequestException("Can't create Sale");
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
    await this.findOneById(_id);
    await this.saleModel.findByIdAndDelete(_id);
    return { message: 'Sale deleted successfully.' };
  }

  async populateSalesWithSeedData(sales: Sale[]) {
    if (sales.length === 0) {
      throw new BadRequestException('No sales data provided for seeding.');
    }
    try {
      await this.saleModel.insertMany(sales);
      return { message: 'Sales data seeded successfully.' };
    } catch (error) {
      throw new BadRequestException(`Error seeding sales data: ${error}`);
    }
  }
}
