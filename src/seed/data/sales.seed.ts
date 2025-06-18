import { Sale } from 'src/sales/entities/sale.entity';
import { SaleItem } from 'src/sales/entities/saleItem.entity';
import { v4 as uuid } from 'uuid';

export const SALES_SEED: Sale[] = [
  {
    id: 'abc1234',
    date: new Date(),
    total: 2,
    clientName: 'Client Name',
    products: [],
  },
  {
    id: uuid(),
    date: new Date(),
    total: 100,
    clientName: 'Client Name',
    products: [
      {
        id: uuid(),
        saleId: 'abc1234',
        productId: '1234abc',
        quantity: 1,
        unitPrice: 100,
      },
    ],
  },
  {
    id: uuid(),
    date: new Date(),
    total: 2,
    clientName: 'Client Name',
    products: [],
  },
];
