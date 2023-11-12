import { BadRequestException, Injectable } from '@nestjs/common';
import { Attribute, Attribute_Group, Category } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@Injectable()
export class AttributesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAttributeDto): Promise<Attribute> {
    try {
      const exist = await this.prisma.attribute.findFirst({
        where: { name: data.name },
      });
      if (exist) {
        throw new BadRequestException('Atrribute is already exists');
      }
      const item = await this.prisma.attribute.create({ data });
      return item;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async findAll(): Promise<Attribute[]> {
    try {
      const items = await this.prisma.attribute.findMany({
        include: { attribute_group: true },
      });
      return items;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async findOne(id: number): Promise<Attribute | null> {
    try {
      const item = await this.prisma.attribute.findUnique({
        where: { id },
        include: { attribute_group: true },
      });
      return item;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async update(id: number, data: UpdateAttributeDto): Promise<Attribute> {
    try {
      const item = await this.prisma.attribute.findUnique({
        where: { id },
      });
      if (!item) {
        throw new BadRequestException('Attribute is not found');
      }
      const update = await this.prisma.attribute.update({
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
      const item = await this.prisma.attribute.findUnique({
        where: { id },
      });
      if (!item) {
        throw new BadRequestException('Attribute is not found');
      }
      await this.prisma.attribute.delete({ where: { id } });
      return { message: 'delete success' };
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
