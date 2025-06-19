import {
  IsString,
  IsOptional,
  IsNumber,
  IsArray,
  MinLength,
  IsPositive,
} from 'class-validator';

export class CreatePlatformDto {
  @IsString()
  @MinLength(1)
  @IsString()
  @MinLength(1)
  code: string;

  @IsString()
  @MinLength(1)
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  manufacturer?: string;

  @IsOptional()
  @IsNumber()
  @MinLength(1900)
  @IsPositive()
  releaseYear?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  compatibleWith?: string[];

  @IsOptional()
  @IsString()
  @MinLength(1)
  region?: string;
}
