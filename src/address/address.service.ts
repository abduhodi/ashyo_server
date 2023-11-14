import { Injectable, NotFoundException } from '@nestjs/common';
import { Address } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}


  async create(data: CreateAddressDto): Promise<Address> {
    try {
      return await this.prisma.address.create({ data });
    } catch (error) {
      throw new Error('Failed to create brand: ' + error.message);
    }
  }

  async findAll() {
    return this.prisma.address.findMany({ include: { order: true } });
  }

  async findOne(id: number) {
    const wantedAddress = await this.prisma.address.findFirst({
      where: { id },
      include: { order: true },
    });
    if (wantedAddress) return wantedAddress;
    throw new NotFoundException('Address not found');
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const wantedAddress = await this.prisma.address.findFirst({
      where: { id },
    });
    if (wantedAddress) return wantedAddress;
    const updatedAddress = await this.prisma.address.update({
      where: { id },
      data: updateAddressDto,
    });
    return updatedAddress;
  }

  async remove(id: number) {
    const wantedAddress = await this.prisma.address.findFirst({
      where: { id },
    });
    if (wantedAddress) return wantedAddress;
    const deletedAddress = await this.prisma.address.delete({
      where: { id },
    });
    return deletedAddress;
  }
}
