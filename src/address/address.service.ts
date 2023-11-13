import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto) {
    const newAddress = await this.prisma.address.create({
      data: {
        ...createAddressDto,
      },
    });
  }

  async findAll() {
    return this.prisma.address.findMany({});
  }

  async findOne(id: number) {
    const wantedAddress = await this.prisma.address.findFirst({
      where: { id },
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
