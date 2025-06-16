import { Sale } from './sale.entity';
import { Product } from '../../products/interfaces/product.interface'; 

export class SaleItem {
  id: number;
  sale: Sale;
  product: Product;
  quantity: number;
  unitPrice: number;
}
