import { Injectable } from '@nestjs/common';
import { CreateCategoryBrandDto } from './dto/create-category_brand.dto';
import { UpdateCategoryBrandDto } from './dto/update-category_brand.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Category_brand } from '@prisma/client';

@Injectable()
export class CategoryBrandService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCategoryBrandDto): Promise<Category_brand> {
    return this.prisma.category_brand.create({ data });
  }

  async findAll(): Promise<Category_brand[]> {
    return this.prisma.category_brand.findMany({
      include: { brand: true, category: true },
    });
  }

  async findOne(id: number): Promise<Category_brand | null> {
    return this.prisma.category_brand.findUnique({
      where: { id },
      include: { brand: true, category: true },
    });
  }

  async update(
    id: number,
    data: UpdateCategoryBrandDto,
  ): Promise<Category_brand> {
    return this.prisma.category_brand.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Category_brand> {
    return this.prisma.category_brand.delete({
      where: { id },
    });
  }
}
