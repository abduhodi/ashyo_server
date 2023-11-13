import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("District")
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({summary: "| Create or reorder position"})
  @Post("create")
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({summary: "| Get single position"})
  @Get('single/:id')
  findOne(@Param('id') id: string) {
    return this.districtService.findOne(+id);
  }

  @ApiOperation({summary: "| Update position"})
  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateDistrictDto: UpdateDistrictDto) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @ApiOperation({summary: "| Delete position"})
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.districtService.remove(+id);
  }
}
