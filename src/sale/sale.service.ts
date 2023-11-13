import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Sale } from '@prisma/client';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSaleDto): Promise<Sale> {
    try {
      return await this.prisma.sale.create({ data });
    } catch (error) {
      throw new Error('Failed to create sale: ' + error.message);
    }
  }

  async findAll(): Promise<Sale[]> {
    try {
      return await this.prisma.sale.findMany({ include: { sales: true } });
    } catch (error) {
      throw new Error('Failed to fetch sales: ' + error.message);
    }
  }

  async findOne(id: number): Promise<Sale> {
    try {
      const sale = await this.prisma.sale.findUnique({
        where: { id },
        include: { sales: true },
      });

      if (!sale) {
        throw new NotFoundException(`Sale with ID ${id} not found`);
      }

      return sale;
    } catch (error) {
      throw new Error(
        `Error while finding sale with ID ${id}: ` + error.message,
      );
    }
  }

  async update(id: number, data: UpdateSaleDto): Promise<Sale> {
    try {
      return await this.prisma.sale.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Failed to update sale with ID ${id}: ` + error.message);
    }
  }

  async remove(id: number): Promise<Sale> {
    try {
      return await this.prisma.sale.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Failed to delete sale with ID ${id}: ` + error.message);
    }
  }
}
