export interface Product {
  uuid: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  categoryId: string;
  platformId: string;
  stock: number;
  status: 'nuevo' | 'usado' | 'reacondicionado';
  internCode: string;
}
