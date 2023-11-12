import { BadRequestException, Injectable } from '@nestjs/common';
import { Product_Info } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInfoDto } from './dto/create-product_info.dto';
import { UpdateProductInfoDto } from './dto/update-product_info.dto';

@Injectable()
export class ProductInfoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductInfoDto): Promise<Product_Info> {
    try {
      const exist = await this.prisma.product_Info.findFirst({
        where: {
          product_id: data.product_id,
          attribute_id: data.attribute_id,
          value: data.value,
        },
      });
      if (exist) {
        throw new BadRequestException('Product info is already exists');
      }
      const item = await this.prisma.product_Info.create({ data });
      return item;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async findAll(): Promise<Product_Info[]> {
    try {
      const items = await this.prisma.product_Info.findMany({
        include: {
          attribute: true,
          //product: true
        },
      });
      return items;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async findOne(id: number): Promise<Product_Info | null> {
    try {
      const item = await this.prisma.product_Info.findUnique({
        where: { id },
        include: {
          attribute: true,
          //product: true
        },
      });
      return item;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async update(id: number, data: UpdateProductInfoDto): Promise<Product_Info> {
    try {
      const item = await this.prisma.product_Info.findUnique({
        where: { id },
      });
      if (!item) {
        throw new BadRequestException('Product_Info is not found');
      }
      const update = await this.prisma.product_Info.update({
        where: { id },
        data,
      });
      return update;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async remove(id: number): Promise<object> {
    try {
      const item = await this.prisma.product_Info.findUnique({
        where: { id },
      });
      if (!item) {
        throw new BadRequestException('Product Info is not found');
      }
      await this.prisma.product_Info.delete({ where: { id } });
      return { message: 'delete success' };
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
