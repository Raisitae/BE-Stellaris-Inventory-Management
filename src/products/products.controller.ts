import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts(): object[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseUUIDPipe) id: string) {
    const product = this.productsService.findOneById(id);
    return product;
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    const product = this.productsService.createProduct(createProductDto);
    return product;
  }
  
  @Patch(':id')
  patchProduct(@Param('id', ParseUUIDPipe) id: string, @Body() UpdateProductDto: UpdateProductDto) {
    const product = this.productsService.updateProduct(id, UpdateProductDto);
    return product;
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.deleteProduct(id);
  }
}
