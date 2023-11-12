import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleModelDto } from './dto/create-sale_model.dto';
import { UpdateSaleModelDto } from './dto/update-sale_model.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Sale_model } from '@prisma/client';

@Injectable()
export class SaleModelService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSaleModelDto): Promise<Sale_model> {
    try {
      return await this.prisma.sale_model.create({ data });
    } catch (error) {
      throw new Error('Failed to create sale_model: ' + error.message);
    }
  }

  async findAll(): Promise<Sale_model[]> {
    try {
      return await this.prisma.sale_model.findMany();
    } catch (error) {
      throw new Error('Failed to fetch sale_models: ' + error.message);
    }
  }

  async findOne(id: number): Promise<Sale_model | null> {
    try {
      return await this.prisma.sale_model.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Sale_model with ID ${id} not found`);
    }
  }

  async update(id: number, data: UpdateSaleModelDto): Promise<Sale_model> {
    try {
      return await this.prisma.sale_model.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(
        `Failed to update sale_model with ID ${id}: ` + error.message,
      );
    }
  }

  async remove(id: number): Promise<Sale_model> {
    try {
      return await this.prisma.sale_model.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(
        `Failed to delete sale_model with ID ${id}: ` + error.message,
      );
    }
  }
}
