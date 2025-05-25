import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(): object[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const product = this.productsService.findOneById(id);
    return product;
  }

  @Post()
  createProduct(@Body() body: Product) {
    return body
  }

  @Patch(':id')
  patchProduct(){

  }

  @Put(':id')
  putProduct(){}

  @Delete(':id')
  deleteProduct(){}
}
