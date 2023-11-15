import { Injectable, NotFoundException } from '@nestjs/common';
import { Order_items } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrder_itemsDto } from './dto/create-order_items.dto';
import { UpdateOrder_itemsDto } from './dto/update-order_items.dto';

@Injectable()
export class Order_itemsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateOrder_itemsDto): Promise<Order_items> {
    return this.prisma.order_items.create({ data });
  }

  async findAll(): Promise<Order_items[]> {
    return this.prisma.order_items.findMany({ include: { order: true } });
  }

  async findOne(id: number): Promise<Order_items | null> {
    try {
      return this.prisma.order_items.findUnique({
        where: { id },
        include: { order: true },
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

  async countQuantity(orderItemId: number): Promise<number> {
    const orderItem = await this.prisma.order_items.findUnique({
      where: { id: orderItemId },
    });

    if (!orderItem) {
      throw new Error(`Order item with id ${orderItemId} not found.`);
    }

    return orderItem.quantity;
  }

  async calculateSubtotal(orderItemId: number): Promise<number> {
    const orderItem = await this.prisma.order_items.findUnique({
      where: { id: orderItemId },
      include: { product: true },
    });

    if (!orderItem) {
      throw new NotFoundException(
        `Order item with id ${orderItemId} not found.`,
      );
    }

    const productPrice = orderItem.product.price;
    return orderItem.quantity * productPrice;
  }
}
