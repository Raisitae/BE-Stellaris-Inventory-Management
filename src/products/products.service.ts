import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Product } from './entity/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async findAll() {
    return this.productModel.find().exec();
  }

  async findOneById(_id: string) {
    const product = await this.productModel.findById(_id);
    if (!product) {
      throw new NotFoundException(`Product with id '${_id}' not found.`);
    }
    return product;
  }

  async createProduct(createProductDto: CreateProductDto) {
    createProductDto.name = createProductDto.name.toLocaleLowerCase();
    try {
      const product = await this.productModel.create({
        ...createProductDto,
      });
      return product;
    } catch {
      throw new InternalServerErrorException("Can't create Product");
    }
  }

  async updateProduct(_id: string, updateProductDto: UpdateProductDto) {
    await this.findOneById(_id);
    if (updateProductDto.id && updateProductDto.id !== _id) {
      throw new BadRequestException('Product id is not valid inside body');
    }

    const updatedProduct = await this.productModel.findByIdAndUpdate(
      _id,
      updateProductDto,
      { new: true },
    );

    return updatedProduct;
  }

  async deleteProduct(_id: string) {
    await this.findOneById(_id);
    await this.productModel.findByIdAndDelete(_id);
    return { message: 'Product deleted successfully' };
  }

  async populateProductsWithSeedData(products: Product[]) {
    if (products.length === 0) {
      throw new BadRequestException('No products to seed');
    }

    try {
      await this.productModel.deleteMany({});
      const createdProducts = await this.productModel.insertMany(products);
      return createdProducts;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error seeding products data: ${error}`,
      );
    }
  }
}
