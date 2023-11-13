import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { District } from '@prisma/client';

@Injectable()
export class DistrictService {
  constructor(private prisma: PrismaService) {}

  // Create
  async create(data: CreateDistrictDto): Promise<District> {
    try {
      return await this.prisma.district.create({ data });
    } catch (error) {
      throw new Error('Failed to create District: ' + error.message);
    }
  }

  async findAll(): Promise<District[]> {
    return this.prisma.district.findMany({});
  }

  async findOne(id: number): Promise<District | null> {
    try {
      return this.prisma.district.findUnique({
        where: { id }
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: UpdateDistrictDto): Promise<District> {
    try {
      return await this.prisma.district.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Failed to update District with ID ${id}: ` + error.message);
    }
  }

  async remove(id: number): Promise<District> {
    try {
      return await this.prisma.district.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Failed to delete district with ID ${id}: ` + error.message);
    }
  }
}
