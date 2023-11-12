import { Injectable } from '@nestjs/common';
import { CreateAttributeGroupDto } from './dto/create-attribute_group.dto';
import { UpdateAttributeGroupDto } from './dto/update-attribute_group.dto';

@Injectable()
export class AttributeGroupService {
  create(createAttributeGroupDto: CreateAttributeGroupDto) {
    return 'This action adds a new attributeGroup';
  }

  findAll() {
    return `This action returns all attributeGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeGroup`;
  }

  update(id: number, updateAttributeGroupDto: UpdateAttributeGroupDto) {
    return `This action updates a #${id} attributeGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeGroup`;
  }
}
