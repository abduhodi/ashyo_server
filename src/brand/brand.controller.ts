import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("BRAND")
@Controller('brand')
export class BrandController {
  
  constructor(private readonly brandService: BrandService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> { 
    return this.brandService.create(createBrandDto);
  }

  @Get()
  findAll(): Promise<Brand[]> {
    return this.brandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Brand | null> {
    return this.brandService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ): Promise<Brand> {
    return this.brandService.update(Number(id), updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Brand> {
    return this.brandService.remove(Number(id));
  }
}
