import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrder_itemsDto } from './dto/create-order_items.dto';
import { Order_items } from '@prisma/client';
import { UpdateOrder_itemsDto } from './dto/update-order_items.dto';

@Injectable()
export class Order_itemsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateOrder_itemsDto): Promise<Order_items> {
    return this.prisma.order_items.create({ data });
  }

  async findAll(): Promise<Order_items[]> {
    return this.prisma.order_items.findMany({});
  }

  async findOne(id: number): Promise<Order_items | null> {
    try {
      return this.prisma.order_items.findUnique({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: UpdateOrder_itemsDto): Promise<Order_items> {
    try {
      const order_items = await this.prisma.order_items.update({
        where: { id },
        data,
      });
      return order_items;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<Order_items> {
    try {
      return this.prisma.order_items.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
