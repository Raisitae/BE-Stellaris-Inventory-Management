export interface PlatformSeed {
  _id: string;
  name: string;
  manufacturer: string;
  releaseYear: number;
  compatibleWith: string[];
  region: string;
}

export const PRODUCT_SEED: PlatformSeed[] = [
  {
    _id: 'SNES',
    name: 'Super Nintendo Entertainment System',
    manufacturer: 'Nintendo',
    releaseYear: 1990,
    compatibleWith: ['Super Famicom'],
    region: 'NTSC',
  },
  {
    _id: 'PS1',
    name: 'PlayStation',
    manufacturer: 'Sony',
    releaseYear: 1994,
    compatibleWith: ['PSOne'],
    region: 'NTSC-U',
  },
  {
    _id: 'PS2',
    name: 'PlayStation 2',
    manufacturer: 'Sony',
    releaseYear: 2000,
    compatibleWith: [],
    region: 'NTSC-U',
  },
  {
    _id: 'PS3',
    name: 'PlayStation 3',
    manufacturer: 'Sony',
    releaseYear: 2006,
    compatibleWith: [],
    region: 'NTSC-U',
  },
  {
    _id: 'N64',
    name: 'Nintendo 64',
    manufacturer: 'Nintendo',
    releaseYear: 1996,
    compatibleWith: [],
    region: 'NTSC',
  },
  {
    _id: 'GEN',
    name: 'Sega Genesis',
    manufacturer: 'Sega',
    releaseYear: 1988,
    compatibleWith: ['Mega Drive'],
    region: 'NTSC',
  },
  // Nintendo handhelds
  {
    _id: 'GB',
    name: 'Game Boy',
    manufacturer: 'Nintendo',
    releaseYear: 1989,
    compatibleWith: [],
    region: 'NTSC',
  },
  {
    _id: 'GBC',
    name: 'Game Boy Color',
    manufacturer: 'Nintendo',
    releaseYear: 1998,
    compatibleWith: ['GB'],
    region: 'NTSC',
  },
  {
    _id: 'GBA',
    name: 'Game Boy Advance',
    manufacturer: 'Nintendo',
    releaseYear: 2001,
    compatibleWith: ['GB', 'GBC'],
    region: 'NTSC',
  },
  {
    _id: 'NDS',
    name: 'Nintendo DS',
    manufacturer: 'Nintendo',
    releaseYear: 2004,
    compatibleWith: ['GBA'],
    region: 'NTSC',
  },
  {
    _id: '3DS',
    name: 'Nintendo 3DS',
    manufacturer: 'Nintendo',
    releaseYear: 2011,
    compatibleWith: ['NDS'],
    region: 'NTSC',
  },
];
