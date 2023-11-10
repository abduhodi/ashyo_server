import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Category_brand } from '@prisma/client';
import { CategoryBrandService } from './category_brand.service';
import { CreateCategoryBrandDto } from './dto/create-category_brand.dto';
import { UpdateCategoryBrandDto } from './dto/update-category_brand.dto';

@ApiTags('Category_brand')
@Controller('category-brand')
export class CategoryBrandController {
  constructor(private readonly categoryBrandService: CategoryBrandService) {}

  @Post()
  create(
    @Body() createCategoryBrandDto: CreateCategoryBrandDto,
  ): Promise<Category_brand> {
    return this.categoryBrandService.create(createCategoryBrandDto);
  }

  @Get()
  findAll(): Promise<Category_brand[]> {
    return this.categoryBrandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category_brand | null> {
    return this.categoryBrandService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateCategoryBrandDto,
  ): Promise<Category_brand> {
    return this.categoryBrandService.update(Number(id), updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Category_brand> {
    return this.categoryBrandService.remove(Number(id));
  }
}
