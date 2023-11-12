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
import { AttributesService } from './attributes.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@ApiTags('Attributes')
@Controller('attribute')
export class AttributesController {
  constructor(private readonly attributeService: AttributesService) {}

  @ApiOperation({ summary: 'Create a new attribute' })
  @ApiResponse({
    status: 201,
    description: 'The attribute has been successfully created.',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createAttributeDto: CreateAttributeDto) {
    return this.attributeService.create(createAttributeDto);
  }

  @ApiOperation({ summary: 'Get all attributes' })
  @ApiResponse({
    status: 200,
    description: 'Return a list of all attributes.',
  })
  @Get()
  findAll() {
    return this.attributeService.findAll();
  }

  @ApiOperation({ summary: 'Get attribute  by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the attribute with the specified ID.',
  })
  @ApiResponse({ status: 404, description: 'Attribute not found.' })
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.attributeService.findOne(id);
  }

  @ApiOperation({ summary: 'Update attribute by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the updated attribute.',
  })
  @ApiResponse({ status: 404, description: 'Attribute not found.' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAttributeDto: UpdateAttributeDto,
  ) {
    return this.attributeService.update(id, updateAttributeDto);
  }

  @ApiOperation({ summary: 'Delete attribute by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the deleted attribute.',
  })
  @ApiResponse({ status: 404, description: 'Attribute not found.' })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.attributeService.remove(id);
  }
}
