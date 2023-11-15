import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, User_address } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: { user_addresses: true, orders: true },
    });
  }

  async findOne(id: number): Promise<User | null> {
    try {
      return this.prisma.user.findUnique({
        where: { id },
        include: { user_addresses: true, orders: true },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    try {
      const user = await this.prisma.user.update({
        where: { id },
        data,
      });
      return user;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<User> {
    try {
      return this.prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
