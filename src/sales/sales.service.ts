import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Sale } from './entities/sale.entity';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuid } from 'uuid';
import sales from 'mockup/sales';
import { CreateSaleDto, UpdateSaleDto } from './dto';

/**
 * Write to file preserving the original format
 * @param salesFilePath - The path to the file to write to
 * @param sales - The products to write to the file
 */
const writeFile = (salesFilePath: string, sales: Sale[]) => {
  const fileContent = `export default ${JSON.stringify(sales, null, 2)};`;
  fs.writeFileSync(salesFilePath, fileContent);
};

@Injectable()
export class SalesService {
  private sales: Sale[];
  private salesFilePath = path.join(process.cwd(), 'mockup', 'sales.ts');
  constructor() {
    this.sales = sales;
  }

  private readFile(filePath: string) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  }

  createSale(createSaleDto: CreateSaleDto) {
    const sale: Sale = {
      id: uuid(),
      ...createSaleDto,
      date: new Date(),
    };
    this.sales.push(sale);

    // This will be replaced by a database connection
    writeFile(this.salesFilePath, this.sales);

    return sale;
  }

  findAll() {
    return [...this.sales];
  }

  findOneById(id: string) {
    const product = this.sales.find((s: Sale) => s.id === id);
    if (!product)
      throw new NotFoundException(`Sale with id '${id}' not found.`);
    return product;
  }

  updateSale(id: string, updateSaleDto: UpdateSaleDto) {
    const saleDB = this.findOneById(id);

    if (updateSaleDto.id && updateSaleDto.id !== id) {
      throw new BadRequestException('Product id is not valid inside body');
    }

    this.sales = this.sales.map((sale: Sale) => {
      if (sale.id === id) {
        const updatedProduct = { ...sale, ...updateSaleDto, id };
        return updatedProduct;
      }

      return sale;
    });
  }

  delete(id: string) {
    const saleDB = this.findOneById(id);
    this.sales = this.sales.filter((product: Sale) => product.id !== id);

    // This will be replaced by a database connection
    writeFile(this.salesFilePath, this.sales);
  }

  populateSalesWithSeedData(sales: Sale[]) {
    this.sales = sales;

    // This will be replaced by a database connection
    writeFile(this.salesFilePath, this.sales);
  }
}
