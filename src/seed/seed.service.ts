import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { SalesService } from 'src/sales/sales.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly salesService: SalesService,
  ) {}

  populateDB() {
    //this.productsService.populateProductsWithSeedData(PRODUCT_SEED);
    //this.salesService.populateSalesWithSeedData(SALES_SEED);

    return 'Mockup jsons populated for Product and Sales';
  }
}
