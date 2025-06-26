import { v4 as uuid } from 'uuid';

export interface ProductSeed {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  platformId: string;
  stock: number;
  status: 'nuevo' | 'usado' | 'reacondicionado';
  internCode: string;
}

export const PRODUCT_SEED: ProductSeed[] = [
  {
    _id: uuid(),
    name: 'Super Mario World',
    price: 120,
    description:
      'Clásico de plataformas para Super Nintendo. ¡Salva a la princesa Peach!',
    imageUrl: 'https://example.com/smw.jpg',
    category: 'juegos',
    platformId: 'SNES',
    stock: 8,
    status: 'usado',
    internCode: 'SMW-SNES',
  },
  {
    _id: uuid(),
    name: 'The Legend of Zelda: Ocarina of Time',
    price: 180,
    description:
      'Aventura épica de Link en Nintendo 64. Uno de los mejores juegos de la historia.',
    imageUrl: 'https://example.com/zelda-oot.jpg',
    category: 'juegos',
    platformId: 'N64',
    stock: 5,
    status: 'usado',
    internCode: 'ZELDA-N64',
  },
  {
    _id: uuid(),
    name: 'Gran Turismo 2',
    price: 90,
    description:
      'Simulador de carreras para PlayStation 1 con más de 500 autos.',
    imageUrl: 'https://example.com/gt2.jpg',
    category: 'juegos',
    platformId: 'PS1',
    stock: 12,
    status: 'reacondicionado',
    internCode: 'GT2-PS1',
  },
  {
    _id: uuid(),
    name: 'Castlevania: Symphony of the Night',
    price: 160,
    description:
      'Explora el castillo de Drácula en este clásico de PlayStation.',
    imageUrl: 'https://example.com/castlevania-sotn.jpg',
    category: 'juegos',
    platformId: 'PS1',
    stock: 4,
    status: 'usado',
    internCode: 'CV-SOTN-PS1',
  },
  {
    _id: uuid(),
    name: 'Metroid Fusion',
    price: 140,
    description: 'Aventura de Samus Aran en Game Boy Advance.',
    imageUrl: 'https://example.com/metroid-fusion.jpg',
    category: 'juegos',
    platformId: 'GBA',
    stock: 6,
    status: 'usado',
    internCode: 'METFUS-GBA',
  },
  {
    _id: uuid(),
    name: 'Mario Kart DS',
    price: 130,
    description: 'Carreras frenéticas con Mario y compañía en Nintendo DS.',
    imageUrl: 'https://example.com/mkds.jpg',
    category: 'juegos',
    platformId: 'NDS',
    stock: 9,
    status: 'reacondicionado',
    internCode: 'MKDS-NDS',
  },
  {
    _id: uuid(),
    name: 'The Legend of Zelda: A Link to the Past',
    price: 125,
    description: 'Uno de los mejores Zeldas para Super Nintendo.',
    imageUrl: 'https://example.com/zelda-alttp.jpg',
    category: 'juegos',
    platformId: 'SNES',
    stock: 7,
    status: 'usado',
    internCode: 'ZELDA-ALTP-SNES',
  },
  {
    _id: uuid(),
    name: 'Pokémon Red',
    price: 170,
    description: 'El clásico que inició la fiebre Pokémon en Game Boy.',
    imageUrl: 'https://example.com/pokemon-red.jpg',
    category: 'juegos',
    platformId: 'GB',
    stock: 3,
    status: 'usado',
    internCode: 'PKM-RED-GB',
  },
  {
    _id: uuid(),
    name: 'Animal Crossing: New Leaf',
    price: 190,
    description: 'Vive en tu propio pueblo en Nintendo 3DS.',
    imageUrl: 'https://example.com/acnl.jpg',
    category: 'juegos',
    platformId: '3DS',
    stock: 5,
    status: 'nuevo',
    internCode: 'ACNL-3DS',
  },
  {
    _id: uuid(),
    name: 'Mega Man X',
    price: 115,
    description: 'Acción y plataformas en Super Nintendo.',
    imageUrl: 'https://example.com/mmx.jpg',
    category: 'juegos',
    platformId: 'SNES',
    stock: 6,
    status: 'usado',
    internCode: 'MMX-SNES',
  },
  {
    _id: '6d64e15c-839b-45aa-96aa-fc94b44da18f',
    name: 'Pokémon Crystal',
    price: 200,
    description:
      'Versión especial de Pokémon para Game Boy Color. Atrapa a Suicune.',
    imageUrl: 'https://example.com/pokemon-crystal.jpg',
    category: 'juegos',
    platformId: 'GBC',
    stock: 7,
    status: 'nuevo',
    internCode: 'PKM-CRY-GBC',
  },
  {
    _id: '5b2ac6ac-a61e-437b-9f8c-56e7378a3cd9',
    name: 'Sonic the Hedgehog 2',
    price: 110,
    description:
      'Acompaña a Sonic y Tails en esta aventura clásica de Sega Genesis.',
    imageUrl: 'https://example.com/sonic2.jpg',
    category: 'juegos',
    platformId: 'GEN',
    stock: 10,
    status: 'usado',
    internCode: 'SONIC2-GEN',
  },
  {
    _id: 'f1c2b3d4-e5f6-7a8b-9c0d-e1f2g3h4i5j6',
    name: 'God of War II',
    price: 150,
    description: 'Kratos regresa en esta épica secuela para PlayStation 2.',
    imageUrl: 'https://example.com/gow2.jpg',
    category: 'juegos',
    platformId: 'PS2',
    stock: 6,
    status: 'reacondicionado',
    internCode: 'GOW2-PS2',
  },
];
