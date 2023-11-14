import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from '@prisma/client';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({});
  }

  async findOne(id: number): Promise<Product | null> {
    try {
      return this.prisma.product.findUnique({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: UpdateProductDto): Promise<Product> {
    try {
      const product = await this.prisma.product.update({
        where: { id },
        data,
      });
      return product;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<Product> {
    try {
      return this.prisma.product.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
