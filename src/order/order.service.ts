import { Injectable } from '@nestjs/common';
import { User_Orders } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrderDto): Promise<User_Orders> {
    try {
      const createdOrder = await this.prisma.user_Orders.create({ data });
      return createdOrder;
    } catch (error) {
      console.error('Error occurred while creating order:', error);
      throw new Error('Could not create order'); 
    }
  }

  async findAll(): Promise<User_Orders[]> {
    return this.prisma.user_Orders.findMany({
      include: { address: true, Order_items: true, payment: true, user: true },
    });
  }

  async findOne(id: number): Promise<User_Orders | null> {
    try {
      return this.prisma.user_Orders.findUnique({
        where: { id },
        include: {
          address: true,  
          Order_items: true,
          payment: true,
          user: true,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: UpdateOrderDto): Promise<User_Orders> {
    try {
      const user_Orders = await this.prisma.user_Orders.update({
        where: { id },
        data,
      });
      return user_Orders;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<User_Orders> {
    try {
      return this.prisma.user_Orders.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
