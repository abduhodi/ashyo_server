import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCart_itemsDto } from './dto/create-cart_items.dto';
import { Cart_items } from '@prisma/client';
import { UpdateCart_itemsDto } from './dto/update-cart_items.dto';

@Injectable()
export class Cart_itemsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCart_itemsDto): Promise<Cart_items> {
    return this.prisma.cart_items.create({ data });
  }

  async findAll(): Promise<Cart_items[]> {
    return this.prisma.cart_items.findMany({});
  }

  async findOne(id: number): Promise<Cart_items | null> {
    try {
      return this.prisma.cart_items.findUnique({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: UpdateCart_itemsDto): Promise<Cart_items> {
    try {
      const cart_items = await this.prisma.cart_items.update({
        where: { id },
        data,
      });
      return cart_items;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<Cart_items> {
    try {
      return this.prisma.cart_items.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
