import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PositionService } from './position.service';
import { UpdatePositionDto } from './dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Position")
@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @ApiOperation({summary: "| Create position"})
  @Post("create")
  createPosition() {
    return this.positionService.createPosition();
  }

  @ApiOperation({summary: "| Get one position"})
  @Get('single')
  fetchSingle() {
    return this.positionService.fetchPosition();
  }

  @ApiOperation({summary: "| Update position"})
  @Put('update')
  updatePosition(@Body() updatePositionDto: UpdatePositionDto) {
    return this.positionService.updatePosition(updatePositionDto);
  }

  @ApiOperation({summary: "| Delete position"})
  @Delete(':id')
  deletePosition(@Param('id') id: string) {
    return this.positionService.deletePosition(+id);
  }
}
