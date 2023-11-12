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
import { ProductInfoService } from './product_info.service';
import { CreateProductInfoDto } from './dto/create-product_info.dto';
import { UpdateProductInfoDto } from './dto/update-product_info.dto';

@ApiTags('Product Info')
@Controller('product-info')
export class ProductInfoController {
  constructor(private readonly productInfoService: ProductInfoService) {}

  @ApiOperation({ summary: 'Create a new product info' })
  @ApiResponse({
    status: 201,
    description: 'The product info has been successfully created.',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createProductInfoDto: CreateProductInfoDto) {
    return this.productInfoService.create(createProductInfoDto);
  }

  @ApiOperation({ summary: 'Get all product info' })
  @ApiResponse({
    status: 200,
    description: 'Return a list of all product info.',
  })
  @Get()
  findAll() {
    return this.productInfoService.findAll();
  }

  @ApiOperation({ summary: 'Get product info  by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the product info with the specified ID.',
  })
  @ApiResponse({ status: 404, description: 'Product Info not found.' })
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.productInfoService.findOne(id);
  }

  @ApiOperation({ summary: 'Update product info by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the updated product info.',
  })
  @ApiResponse({ status: 404, description: 'Product Info not found.' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductInfoDto: UpdateProductInfoDto,
  ) {
    return this.productInfoService.update(id, updateProductInfoDto);
  }

  @ApiOperation({ summary: 'Delete product info by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the deleted product info.',
  })
  @ApiResponse({ status: 404, description: 'Product Info not found.' })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productInfoService.remove(id);
  }
}
