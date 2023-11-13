import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SaleModelService } from './sale_model.service';
import { CreateSaleModelDto } from './dto/create-sale_model.dto';
import { UpdateSaleModelDto } from './dto/update-sale_model.dto';
import { ApiTags } from '@nestjs/swagger';
import { Sale_model } from '@prisma/client';

@ApiTags('Sale-Model')
@Controller('sale-model')
export class SaleModelController {
  constructor(private readonly saleModelService: SaleModelService) {}

  @Post()
  create(@Body() createSaleModelDto: CreateSaleModelDto): Promise<Sale_model> {
    return this.saleModelService.create(createSaleModelDto);
  }

  @Get()
  findAll(): Promise<Sale_model[]> {
    return this.saleModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sale_model | null> { 
    return this.saleModelService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleModelDto: UpdateSaleModelDto,
  ): Promise<Sale_model> {
    return this.saleModelService.update(Number(id), updateSaleModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Sale_model> {
    return this.saleModelService.remove(Number(id));
  }
}
