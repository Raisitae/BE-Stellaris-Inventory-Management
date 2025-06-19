export interface Product {
  uuid: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  category: 'juegos' | 'consolas' | 'accesorios' | 'merchandising' | 'otros';
  platformId: string;
  stock: number;
  status: 'nuevo' | 'usado' | 'reacondicionado';
  internCode: string;
}
