import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryBrandDto } from './dto/create-category_brand.dto';
import { UpdateCategoryBrandDto } from './dto/update-category_brand.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Category_brand } from '@prisma/client';

@Injectable()
export class CategoryBrandService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCategoryBrandDto): Promise<Category_brand> {
    try {
      return await this.prisma.category_brand.create({ data });
    } catch (error) {
      throw new Error('Failed to create category_brand: ' + error.message);
    }
  }

  async findAll(): Promise<Category_brand[]> {
    try {
      return await this.prisma.category_brand.findMany({
        include: { brand: true, category: true },
      });
    } catch (error) {
      throw new Error('Failed to fetch category_brands: ' + error.message);
    }
  }

  async findOne(id: number): Promise<Category_brand | null> {
    try {
      return await this.prisma.category_brand.findUnique({
        where: { id },
        include: { brand: true, category: true },
      });
    } catch (error) {
      throw new NotFoundException(`Category_brand with ID ${id} not found`);
    }
  }

  async update(
    id: number,
    data: UpdateCategoryBrandDto,
  ): Promise<Category_brand> {
    try {
      return await this.prisma.category_brand.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(
        `Failed to update category_brand with ID ${id}: ` + error.message,
      );
    }
  }

  async remove(id: number): Promise<Category_brand> {
    try {
      return await this.prisma.category_brand.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(
        `Failed to delete category_brand with ID ${id}: ` + error.message,
      );
    }
  }
}
