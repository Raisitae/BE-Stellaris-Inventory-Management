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
import { CreateProductDto } from './dto/create-product.dto';

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
  
  /*
  @Patch(':id')
  patchProduct(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {}

  @Put(':id')
  putProduct(@Param('id', ParseUUIDPipe) id: string, @Body() body: any) {}

  @Delete(':id')
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {}
  */
}
