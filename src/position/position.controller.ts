import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PositionService } from './position.service';
import { UpdatePositionDto } from './dto';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post("create")
  createPosition() {
    return this.positionService.createPosition();
  }

  @Get('single')
  fetchSingle() {
    return this.positionService.fetchPosition();
  }

  @Put('update')
  updatePosition(@Body() updatePositionDto: UpdatePositionDto) {
    return this.positionService.updatePosition(updatePositionDto);
  }

  @Delete(':id')
  deletePosition(@Param('id') id: string) {
    return this.positionService.deletePosition(+id);
  }
}
