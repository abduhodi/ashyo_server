import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Product_mediaService } from './product_media.service';
import { CreateProduct_mediaDto } from './dto/create-product_media.dto';
import { UpdateProduct_mediaDto } from './dto/update-product_media.dto';

@ApiTags('Product_media')
@Controller('product_media')
export class Product_mediaController {
  constructor(private readonly product_mediaService: Product_mediaService) {}

  @Post()
  create(@Body() createProduct_mediaDto: CreateProduct_mediaDto) {
    return this.product_mediaService.create(createProduct_mediaDto);
  }

  @Get()
  findAll() {
    return this.product_mediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.product_mediaService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProduct_mediaDto: UpdateProduct_mediaDto,
  ) {
    return this.product_mediaService.update(Number(id), updateProduct_mediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.product_mediaService.remove(Number(id));
  }
}
