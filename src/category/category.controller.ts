import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete, 
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '@prisma/client';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CATEGORY')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category | null> {
    return this.categoryService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.update(Number(id), updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Category> {
    return this.categoryService.remove(Number(id));
  }
}
