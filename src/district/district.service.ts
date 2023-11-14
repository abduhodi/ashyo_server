import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DistrictService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDistrictDto: CreateDistrictDto) {
    const conflict = await this.prisma.district.findUnique({
      where: { name: createDistrictDto?.name.toLowerCase() },
    });
    if (conflict) throw new ConflictException('Already exists');
    try {
      const newDistrict = await this.prisma.district.create({
        data: createDistrictDto,
      });
      return newDistrict;
    } catch (error) {
      throw new BadRequestException(
        'check that the credits are entered correctly',
      );
    }
  }

<<<<<<< HEAD
=======

>>>>>>> f9f5714c3cb9ae35c0f25c799d39dd0044e5ce70
  async findOne(id: number) {
    const wantedDistrict = await this.prisma.district.findFirst({
      where: { id },
    });
    if (wantedDistrict) return wantedDistrict;
    throw new NotFoundException('District not found');
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const wantedDistrict = await this.prisma.district.findFirst({
      where: { id },
    });
    if (!wantedDistrict) throw new NotFoundException('District not found');
    const updatedDistrict = await this.prisma.district.update({
      where: { id },
      data: updateDistrictDto,
    });
    return updatedDistrict;
  }

  async remove(id: number) {
    const wantedDistrict = await this.prisma.district.findFirst({
      where: { id },
    });
    if (!wantedDistrict) throw new NotFoundException('District not found');
    const deletedDistrict = await this.prisma.district.delete({
      where: { id },
    });
    return deletedDistrict;
  }
}
