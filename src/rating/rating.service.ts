import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Rating } from '@prisma/client';

@Injectable()
export class RatingService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRatingDto): Promise<Rating> {
    try {
      return await this.prisma.rating.create({ data });
    } catch (error) {
      throw new Error('Failed to create Raiting: ' + error.message);
    }
  }

  async findAll(): Promise<Rating[]> {
    return this.prisma.rating.findMany({});
  }

  async findOne(id: number): Promise<Rating | null> {
    try {
      return this.prisma.rating.findUnique({
        where: { id }
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: UpdateRatingDto): Promise<Rating> {
    try {
      return await this.prisma.rating.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Failed to update Raiting with ID ${id}: ` + error.message);
    }
  }
  async remove(id: number): Promise<Rating> {
    try {
      return await this.prisma.rating.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Failed to delete Raiting with ID ${id}: ` + error.message);
    }
  }
}
