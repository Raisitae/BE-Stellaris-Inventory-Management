import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import products from 'mockup/products';
import { Product } from './entity/product.interface';
import { v4 as uuid } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import { CreateProductDto, UpdateProductDto } from './dto';

/**
 * Write to file preserving the original format
 * @param productsFilePath - The path to the file to write to
 * @param products - The products to write to the file
 */
const writeFile = (productsFilePath: string, products: Product[]) => {
  const fileContent = `export default ${JSON.stringify(products, null, 2)};`;
  fs.writeFileSync(productsFilePath, fileContent);
};

@Injectable()
export class ProductsService {
  private products: Product[];
  private readonly productsFilePath = path.join(
    process.cwd(),
    'mockup',
    'products.ts',
  );

  constructor() {
    this.products = products;
  }

  findAll() {
    return [...this.products];
  }

  findOneById(id: string) {
    const product = this.products.find((p: Product) => p.id === id);
    if (!product)
      throw new NotFoundException(`Product with id '${id}' not found.`);
    return product;
  }

  createProduct(createProductDto: CreateProductDto) {
    const product: Product = {
      id: uuid(),
      ...createProductDto,
    };
    this.products.push(product);

    // This will be replaced by a database connection
    writeFile(this.productsFilePath, this.products);

    return product;
  }

  updateProduct(id: string, UpdateProductDto: UpdateProductDto) {
    const productDB = this.findOneById(id);

    if (UpdateProductDto.id && UpdateProductDto.id !== id) {
      throw new BadRequestException('Product id is not valid inside body');
    }

    this.products = this.products.map((product: Product) => {
      if (product.id === id) {
        const updatedProduct = { ...product, ...UpdateProductDto, id };
        return updatedProduct;
      }

      return product;
    });

    // This will be replaced by a database connection
    writeFile(this.productsFilePath, this.products);

    return productDB;
  }

  deleteProduct(id: string) {
    const productDB = this.findOneById(id);
    this.products = this.products.filter(
      (product: Product) => product.id !== id,
    );

    // This will be replaced by a database connection
    writeFile(this.productsFilePath, this.products);
  }

  populateProductsWithSeedData(products: Product[]) {
    this.products = products;

    // This will be replaced by a database connection
    writeFile(this.productsFilePath, this.products);
  }
}
