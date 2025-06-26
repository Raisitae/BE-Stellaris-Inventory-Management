import {
  IsNumber,
  IsString,
  MinLength,
  IsOptional,
  IsIn,
  Min,
  IsPositive,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsOptional()
  readonly imageUrl?: string;

  @IsIn(['juegos', 'consolas', 'accesorios', 'merchandising', 'otros'])
  readonly category:
    | 'juegos'
    | 'consolas'
    | 'accesorios'
    | 'merchandising'
    | 'otros';

  @IsString()
  @MinLength(1)
  readonly platformId: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  readonly price: number;

  @IsNumber()
  @IsPositive()
  @Min(1)
  readonly stock: number;

  @IsIn([
    'nuevo',
    'usado',
    'reacondicionado',
    'loose',
    'CIB',
    'gameManual',
    'gameBox',
    'manual',
    'box',
  ])
  readonly status:
    | 'nuevo'
    | 'usado'
    | 'reacondicionado'
    | 'loose'
    | 'CIB'
    | 'gameManual'
    | 'gameBox'
    | 'manual'
    | 'box';
  @IsString()
  @MinLength(1)
  readonly internCode: string;
}
