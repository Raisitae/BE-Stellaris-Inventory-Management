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
    total: 200,
    clientName: 'Client Name',
    products: [
      {
        productId: '6d64e15c-839b-45aa-96aa-fc94b44da18f',
        quantity: 1,
        unitPrice: 200,
      },
      {
        productId: '5b2ac6ac-a61e-437b-9f8c-56e7378a3cd9',
        quantity: 1,
        unitPrice: 500,
      },
      {
        productId: 'f1c2b3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6',
        quantity: 1,
        unitPrice: 300,
      },
    ],
  },
  {
    _id: uuid(),
    date: new Date(),
    total: 310,
    clientName: 'Juan Pérez',
    products: [
      {
        productId: '6d64e15c-839b-45aa-96aa-fc94b44da18f', // Pokémon Crystal
        quantity: 1,
        unitPrice: 200,
      },
      {
        productId: 'f1c2b3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6', // God of War II
        quantity: 1,
        unitPrice: 110,
      },
    ],
  },
  {
    _id: uuid(),
    date: new Date(),
    total: 110,
    clientName: 'María López',
    products: [
      {
        productId: '5b2ac6ac-a61e-437b-9f8c-56e7378a3cd9', // Sonic the Hedgehog 2
        quantity: 1,
        unitPrice: 110,
      },
    ],
  },
  {
    _id: uuid(),
    date: new Date(),
    total: 350,
    clientName: 'Carlos Gómez',
    products: [
      {
        productId: '6d64e15c-839b-45aa-96aa-fc94b44da18f', // Pokémon Crystal
        quantity: 1,
        unitPrice: 200,
      },
      {
        productId: '5b2ac6ac-a61e-437b-9f8c-56e7378a3cd9', // Sonic the Hedgehog 2
        quantity: 1,
        unitPrice: 150,
      },
    ],
  },
];
