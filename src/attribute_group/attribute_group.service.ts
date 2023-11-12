import { BadRequestException, Injectable } from '@nestjs/common';
import { Attribute_Group, Category } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAttributeGroupDto } from './dto/create-attribute_group.dto';
import { UpdateAttributeGroupDto } from './dto/update-attribute_group.dto';

@Injectable()
export class AttributeGroupService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAttributeGroupDto): Promise<Attribute_Group> {
    try {
      const exist = await this.prisma.attribute_Group.findFirst({
        where: { name: data.name },
      });
      if (exist) {
        throw new BadRequestException('Atrribute Group is already exists');
      }
      const item = await this.prisma.attribute_Group.create({ data });
      return item;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async findAll(): Promise<Attribute_Group[]> {
    try {
      const items = await this.prisma.attribute_Group.findMany({
        include: { attributes: true, category: true },
      });
      return items;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async findOne(id: number): Promise<Attribute_Group | null> {
    try {
      const item = await this.prisma.attribute_Group.findUnique({
        where: { id },
        include: { attributes: true, category: true },
      });
      return item;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async update(
    id: number,
    data: UpdateAttributeGroupDto,
  ): Promise<Attribute_Group> {
    try {
      const item = await this.prisma.attribute_Group.findUnique({
        where: { id },
      });
      if (!item) {
        throw new BadRequestException('Attribute Group is not found');
      }
      const update = await this.prisma.attribute_Group.update({
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
      const item = await this.prisma.attribute_Group.findUnique({
        where: { id },
      });
      if (!item) {
        throw new BadRequestException('Attribute Group is not found');
      }
      await this.prisma.attribute_Group.delete({ where: { id } });
      return { message: 'delete success' };
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
