import { ApiProperty } from '@nestjs/swagger';

export class PlatformResponseDto {
  @ApiProperty({ example: 'PS1' })
  code: string;

  @ApiProperty({ example: 'PlayStation' })
  name: string;

  @ApiProperty({ example: 'Sony' })
  manufacturer?: string;

  @ApiProperty({ example: 1994 })
  releaseYear?: number;

  @ApiProperty({ example: ['PSOne'] })
  compatibleWith?: string[];

  @ApiProperty({ example: 'NTSC-U' })
  region?: string;
}
