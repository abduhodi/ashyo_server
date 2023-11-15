import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttributeGroupProductModelService } from './attribute-group_product-model.service';
import { CreateAttributeGroupProductModelDto } from './dto/create-attribute-group_product-model.dto';
import { UpdateAttributeGroupProductModelDto } from './dto/update-attribute-group_product-model.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Attribute Group Product Model")
@Controller('attribute-group-product-model')
export class AttributeGroupProductModelController {
  constructor(private readonly attributeGroupProductModelService: AttributeGroupProductModelService) {}

  @Post()
  create(@Body() createAttributeGroupProductModelDto: CreateAttributeGroupProductModelDto) {
    return this.attributeGroupProductModelService.create(createAttributeGroupProductModelDto);
  }

  @Get()
  findAll() {
    return this.attributeGroupProductModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributeGroupProductModelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttributeGroupProductModelDto: UpdateAttributeGroupProductModelDto) {
    return this.attributeGroupProductModelService.update(+id, updateAttributeGroupProductModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attributeGroupProductModelService.remove(+id);
  }
}
