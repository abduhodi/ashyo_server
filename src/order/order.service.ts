import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateOrderDto): Promise<Order> {
    return this.prisma.order.create({ data });
  }

  async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany({
      include: { Address: true, Order_items: true, payment: true,User:true },
    });
  }

  async findOne(id: number): Promise<Order | null> {
    try {
      return this.prisma.order.findUnique({
        where: { id },
        include: { Address: true, Order_items: true, payment: true ,User:true},
      });
    } catch (error) {
      return error; 
    }
  }

  async update(id: number, data: UpdateOrderDto): Promise<Order> {
    try {
      const order = await this.prisma.order.update({
        where: { id },
        data,
      });
      return order;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<Order> {
    try {
      return this.prisma.order.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
