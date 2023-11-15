import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCategoryDto): Promise<Category> {
    let newCategory: Category;
    const allCategories = await this.prisma.category.findMany({});
    if (data.parent_id) {
      const isHave = allCategories.some(
        (category) => category.id == data.parent_id,
      );
      if (!isHave) throw new BadRequestException(`Parent category not found`);
    }
    try {
      newCategory = await this.prisma.category.create({ data });
    } catch (error) {
      throw new BadRequestException(`Already exists`);
    }
    return newCategory;
  }

  async findAll(): Promise<Category[]> {
    try {
      return await this.prisma.category.findMany({ include: { brands: true, children: true } });
    } catch (error) {
      throw new Error('Failed to fetch categories: ' + error.message);
    }
  }

  async findOne(id: number): Promise<Category | null> {
    try {
      return await this.prisma.category.findUnique({
        where: { id },
        include: { parent_category: true, children: true },
      });
    } catch (error) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
  }

  async update(id: number, data: UpdateCategoryDto): Promise<Category> {
    try {
      return await this.prisma.category.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(
        `Failed to update category with ID ${id}: ` + error.message,
      );
    }
  }

  async remove(id: number): Promise<Category> {
    try {
      return await this.prisma.category.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(
        `Failed to delete category with ID ${id}: ` + error.message,
      );
    }
  }
}
