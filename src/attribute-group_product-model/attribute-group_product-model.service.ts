import { Injectable } from '@nestjs/common';
import { CreateAttributeGroupProductModelDto } from './dto/create-attribute-group_product-model.dto';
import { UpdateAttributeGroupProductModelDto } from './dto/update-attribute-group_product-model.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttributeGroupProductModelService {
  constructor(private readonly prisma: PrismaService){}
  async create(
    createAttributeGroupProductModelDto: CreateAttributeGroupProductModelDto,
  ) {
    const newReleation = await this.prisma.attribueGroup_ProductModel.create({
      data: createAttributeGroupProductModelDto,
    });
    return newReleation;
  }

  async findAll() {
    const allReleations = await this.prisma.attribueGroup_ProductModel.findMany({});
    return allReleations;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeGroupProductModel`;
  }

  update(id: number, updateAttributeGroupProductModelDto: UpdateAttributeGroupProductModelDto) {
    return `This action updates a #${id} attributeGroupProductModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeGroupProductModel`;
  }
}
