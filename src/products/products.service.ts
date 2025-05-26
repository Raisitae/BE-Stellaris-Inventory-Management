import { Injectable, NotFoundException } from '@nestjs/common';
import products from 'mockup/products';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { v4 as uuid } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductsService {
  private products: Product[];
  private readonly productsFilePath = path.join(process.cwd(), 'mockup', 'products.ts');

  constructor() {
    this.products = products;
  }

  findAll() {
    return [...this.products];
  }

  findOneById(id: string) {
    const product = this.products.find((p: Product) => p.id === id);
    if (!product) throw new NotFoundException(`Product with id '${id}' not found.`);
    return product;
  }

  createProduct(createProductDto: CreateProductDto) {
    const product: Product = {
      id: uuid(),
      ...createProductDto
    };
    this.products.push(product);
    
    // Write to file preserving the original format
    const fileContent = `export default ${JSON.stringify(this.products, null, 2)};`;
    fs.writeFileSync(this.productsFilePath, fileContent);
    
    return product;
  }
}
