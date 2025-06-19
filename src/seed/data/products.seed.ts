import { Product } from 'src/products/entity/product.interface';
import { v4 as uuid } from 'uuid';

export const PRODUCT_SEED: Product[] = [
  {
    id: uuid(),
    name: 'Product 1',
    price: 100,
  },
  {
    id: uuid(),
    name: 'Product 2',
    price: 100,
  },
  {
    id: uuid(),
    name: 'Product 3',
    price: 100,
  },
  {
    id: '1234abc',
    name: 'Product 4',
    price: 100,
  },
  
];
