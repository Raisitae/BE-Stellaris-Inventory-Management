import { Controller, Get, Param } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { PlatformResponseDto } from './dto';

@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Get()
  @ApiParam({ name: 'code', required: false, description: 'Platform code' })
  @ApiOkResponse({
    description: 'List of platforms',
    type: [PlatformResponseDto],
  })
  findAll() {
    return this.platformService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Platform found', type: PlatformResponseDto })
  findOne(@Param('code') id: string) {
    return this.platformService.findOneByCode(id);
  }
}
