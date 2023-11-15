import { Injectable } from '@nestjs/common';
import { CreateAttributeGroupCategoryDto } from './dto/create-attribute-group_category.dto';
import { UpdateAttributeGroupCategoryDto } from './dto/update-attribute-group_category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttributeGroupCategoryService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createAttributeGroupCategoryDto: CreateAttributeGroupCategoryDto,
  ) {
    const newReleation = await this.prisma.attributeGroup_Category.create({
      data: createAttributeGroupCategoryDto,
    });
    return newReleation;
  }

  async findAll() {
    const allReleations = await this.prisma.attributeGroup_Category.findMany({});
    return allReleations;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeGroupCategory`;
  }

  update(
    id: number,
    updateAttributeGroupCategoryDto: UpdateAttributeGroupCategoryDto,
  ) {
    return `This action updates a #${id} attributeGroupCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeGroupCategory`;
  }
}
