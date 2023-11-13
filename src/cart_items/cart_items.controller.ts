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
import { Cart_itemsService } from './cart_items.service';
import { CreateCart_itemsDto } from './dto/create-cart_items.dto';
import { UpdateCart_itemsDto } from './dto/update-cart_items.dto';

@ApiTags('Cart_items')
@Controller('cart_items')
export class Cart_itemsController {
  constructor(private readonly cart_itemsService: Cart_itemsService) {}

  @Post()
  create(@Body() createCart_itemsDto: CreateCart_itemsDto) {
    return this.cart_itemsService.create(createCart_itemsDto);
  }

  @Get()
  findAll() {
    return this.cart_itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cart_itemsService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCart_itemsDto: UpdateCart_itemsDto,
  ) {
    return this.cart_itemsService.update(Number(id), updateCart_itemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cart_itemsService.remove(Number(id));
  }
}
