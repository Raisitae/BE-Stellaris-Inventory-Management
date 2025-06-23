import { v4 as uuid } from 'uuid';

export interface SaleSeed {
  _id: string;
  date: Date;
  total: number;
  clientName: string;
  products: any[];
}

export const SALES_SEED: SaleSeed[] = [
  {
    _id: uuid(),
    date: new Date(),
    total: 2,
    clientName: 'Client Name',
    products: [],
  },
  {
    _id: uuid(),
    date: new Date(),
    total: 100,
    clientName: 'Client Name',
    products: [],
  },
];
