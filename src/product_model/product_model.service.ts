import { Injectable, NotFoundException } from '@nestjs/common';
import { Product_model } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductModelDto } from './dto/create-product_model.dto';
import { UpdateProductModelDto } from './dto/update-product_model.dto';

@Injectable()
export class ProductModelService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductModelDto): Promise<Product_model> {
    try {
      return await this.prisma.product_model.create({ data });
    } catch (error) {
      throw new Error('Failed to create product_model: ' + error.message);
    }
  }

  async findAll(): Promise<Product_model[]> {
    try {
      return await this.prisma.product_model.findMany();
    } catch (error) {
      throw new Error('Failed to fetch product_models: ' + error.message);
    }
  }

  async findOne(id: number): Promise<Product_model | null> {
    try {
      return await this.prisma.product_model.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Product_model with ID ${id} not found`);
    }
  }

  async update(
    id: number,
    data: UpdateProductModelDto,
  ): Promise<Product_model> {
    try {
      return await this.prisma.product_model.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(
        `Failed to update product_model with ID ${id}: ` + error.message,
      );
    }
  }

  async remove(id: number): Promise<Product_model> {
    try {
      return await this.prisma.product_model.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(
        `Failed to delete product_model with ID ${id}: ` + error.message,
      );
    }
  }
}
