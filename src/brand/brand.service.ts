import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand, Category } from '@prisma/client';

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBrandDto): Promise<Brand> {
    try {
      return await this.prisma.brand.create({ data });
    } catch (error) {
      throw new Error('Failed to create brand: ' + error.message);
    }
  }

  async findAll(): Promise<Brand[]> {
    try {
      return await this.prisma.brand.findMany({
        include: { categories: true },
      });
    } catch (error) {
      throw new Error('Failed to fetch brands: ' + error.message);
    }
  }

  async findOne(id: number): Promise<Brand | null> {
    try {
      return await this.prisma.brand.findUnique({
        where: { id },
        include: { categories: true },
      });
    } catch (error) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
  }

  async update(id: number, data: UpdateBrandDto): Promise<Brand> {
    try {
      return await this.prisma.brand.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Failed to update brand with ID ${id}: ` + error.message);
    }
  }

  async remove(id: number): Promise<Brand> {
    try {
      return await this.prisma.brand.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Failed to delete brand with ID ${id}: ` + error.message);
    }
  }
}
