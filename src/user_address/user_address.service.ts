import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUser_addressDto } from './dto/create-user_address.dto';
import { User_address } from '@prisma/client';
import { UpdateUser_addressDto } from './dto/update-user_address.dto';

@Injectable()
export class User_addressService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUser_addressDto): Promise<User_address> {
    return this.prisma.user_address.create({ data });
  }

  async findAll(): Promise<User_address[]> {
    return this.prisma.user_address.findMany({});
  }

  async findOne(id: number): Promise<User_address | null> {
    try {
      return this.prisma.user_address.findUnique({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: UpdateUser_addressDto): Promise<User_address> {
    try {
      const user_address = await this.prisma.user_address.update({
        where: { id },
        data,
      });
      return user_address;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<User_address> {
    try {
      return this.prisma.user_address.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
