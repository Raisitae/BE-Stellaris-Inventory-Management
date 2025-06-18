export interface Product {
    id: string;
    name: string;
    description?: string;
    imageUrl?: string;
    categoryId: string;
    platformId: string;
    price: number;
    stock: number;
    status: 'nuevo' | 'usado' | 'reacondicionado';
    internCode: string;
  }
  