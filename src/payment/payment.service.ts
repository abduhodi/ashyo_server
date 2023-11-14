import { BadRequestException, Injectable } from '@nestjs/common';
import { Payment } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PAYMENT_STATUS } from '../enums/payment_status.enum';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePaymentDto): Promise<Payment> {
    try {
      const item = await this.prisma.payment.create({
        data: {
          ...data,
          payment_date: new Date(),
          totalAmount: 0,
          payment_status: PAYMENT_STATUS.PENDING,
        },
      });
      return item;
    } catch (error) {
      throw new BadRequestException(error?.message); 
    }
  }

  async findAll(): Promise<Payment[]> {
    try {
      const items = await this.prisma.payment.findMany({
        include: { user: true, order: true },
      });
      return items;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async findOne(id: number): Promise<Payment | null> {
    try {
      const item = await this.prisma.payment.findUnique({
        where: { id },
        include: {
          user: true,
          order: true
        },
      });
      return item;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async update(id: number, data: UpdatePaymentDto): Promise<Payment> {
    try {
      const item = await this.prisma.payment.findUnique({
        where: { id },
      });
      if (!item) {
        throw new BadRequestException('Payment is not found');
      }
      const update = await this.prisma.payment.update({
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
      const item = await this.prisma.payment.findUnique({
        where: { id },
      });
      if (!item) {
        throw new BadRequestException('Payment is not found');
      }
      await this.prisma.payment.delete({ where: { id } });
      return { message: 'delete success' };
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
