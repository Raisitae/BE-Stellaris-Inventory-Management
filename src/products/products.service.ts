import { Injectable, NotFoundException } from '@nestjs/common';
import products from 'mockup/products';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductsService {
  private products: object[];

  constructor() {
    this.products = products;
  }

  findAll() {
    return [...this.products];
  }

  findOneById(id: number) {
    const product = this.products.find((p: Product) => p.id === id);
    if (!product) throw new NotFoundException(`Product with id '${id}' not found.`);
 
    return product;
  }
}
