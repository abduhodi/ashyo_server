// attribute-group.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAttributeGroupDto } from './dto/create-attribute_group.dto';
import { AttributeGroupService } from './attribute_group.service';
import { UpdateAttributeGroupDto } from './dto/update-attribute_group.dto';

@ApiTags('Attribute Groups')
@Controller('attribute-groups')
export class AttributeGroupController {
  constructor(private readonly attributeGroupService: AttributeGroupService) {}

  @ApiOperation({ summary: 'Create a new attribute group' })
  @ApiResponse({
    status: 201,
    description: 'The attribute group has been successfully created.',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createAttributeGroupDto: CreateAttributeGroupDto) {
    return this.attributeGroupService.create(createAttributeGroupDto);
  }

  @ApiOperation({ summary: 'Get all attribute groups' })
  @ApiResponse({
    status: 200,
    description: 'Return a list of all attribute groups.',
  })
  @Get()
  findAll() {
    return this.attributeGroupService.findAll();
  }

  @ApiOperation({ summary: 'Get attribute group by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the attribute group with the specified ID.',
  })
  @ApiResponse({ status: 404, description: 'Attribute group not found.' })
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.attributeGroupService.findOne(id);
  }

  @ApiOperation({ summary: 'Update attribute group by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the updated attribute group.',
  })
  @ApiResponse({ status: 404, description: 'Attribute group not found.' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAttributeGroupDto: UpdateAttributeGroupDto,
  ) {
    return this.attributeGroupService.update(id, updateAttributeGroupDto);
  }

  @ApiOperation({ summary: 'Delete attribute group by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the deleted attribute group.',
  })
  @ApiResponse({ status: 404, description: 'Attribute group not found.' })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.attributeGroupService.remove(id);
  }
}
