import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductModelService } from './product_model.service';
import { CreateProductModelDto } from './dto/create-product_model.dto';
import { UpdateProductModelDto } from './dto/update-product_model.dto';
import { Product_model } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Product_model")
@Controller('product-model')
export class ProductModelController {
  constructor(private readonly productModelService: ProductModelService) {}

  @Post()
  create(
    @Body() createProductModelDto: CreateProductModelDto,
  ): Promise<Product_model> {
    return this.productModelService.create(createProductModelDto);
  }

  @Get()
  findAll(): Promise<Product_model[]> {
    return this.productModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product_model | null> {
    return this.productModelService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductModelDto: UpdateProductModelDto,
  ): Promise<Product_model> {
    return this.productModelService.update(Number(id), updateProductModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product_model> {
    return this.productModelService.remove(Number(id));
  }
}
