import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttributeGroupCategoryService } from './attribute-group_category.service';
import { CreateAttributeGroupCategoryDto } from './dto/create-attribute-group_category.dto';
import { UpdateAttributeGroupCategoryDto } from './dto/update-attribute-group_category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Attribute Group Category")
@Controller('attribute-group-category')
export class AttributeGroupCategoryController {
  constructor(private readonly attributeGroupCategoryService: AttributeGroupCategoryService) {}

  @Post()
  create(@Body() createAttributeGroupCategoryDto: CreateAttributeGroupCategoryDto) {
    return this.attributeGroupCategoryService.create(createAttributeGroupCategoryDto);
  }

  @Get()
  findAll() {
    return this.attributeGroupCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributeGroupCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttributeGroupCategoryDto: UpdateAttributeGroupCategoryDto) {
    return this.attributeGroupCategoryService.update(+id, updateAttributeGroupCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attributeGroupCategoryService.remove(+id);
  }
}
