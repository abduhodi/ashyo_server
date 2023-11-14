import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProduct_mediaDto } from './dto/create-product_media.dto';
import { Product_media } from '@prisma/client';
import { UpdateProduct_mediaDto } from './dto/update-product_media.dto';

@Injectable()
export class Product_mediaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProduct_mediaDto): Promise<Product_media> {
    return this.prisma.product_media.create({ data });
  }

  async findAll(): Promise<Product_media[]> {
    return this.prisma.product_media.findMany({});
  }

  async findOne(id: number): Promise<Product_media | null> {
    try {
      return this.prisma.product_media.findUnique({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }

  async update(
    id: number,
    data: UpdateProduct_mediaDto,
  ): Promise<Product_media> {
    try {
      const product_media = await this.prisma.product_media.update({
        where: { id },
        data,
      });
      return product_media;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<Product_media> {
    try {
      return this.prisma.product_media.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
