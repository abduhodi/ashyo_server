import { Injectable } from '@nestjs/common';
import { Product_model } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductModelDto } from './dto/create-product_model.dto';
import { UpdateProductModelDto } from './dto/update-product_model.dto';

@Injectable()
export class ProductModelService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductModelDto): Promise<Product_model> {
    return this.prisma.product_model.create({ data });
  }

  async findAll(): Promise<Product_model[]> {
    return this.prisma.product_model.findMany();
  }

  async findOne(id: number): Promise<Product_model | null> {
    return this.prisma.product_model.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    data: UpdateProductModelDto,
  ): Promise<Product_model> {
    return this.prisma.product_model.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Product_model> {
    return this.prisma.product_model.delete({
      where: { id },
    });
  }
}
