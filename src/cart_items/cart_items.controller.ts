import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Cart_itemsService } from './cart_items.service';
import { CreateCart_itemsDto } from './dto/create-cart_items.dto';
import { UpdateCart_itemsDto } from './dto/update-cart_items.dto';
import { Request, Response } from 'express';

@ApiTags('Cart_items')
@Controller('cart_items')
export class Cart_itemsController {
  constructor(private readonly cart_itemsService: Cart_itemsService) {}

  @Post()
  create(
    @Body() createCart_itemsDto: CreateCart_itemsDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.cart_itemsService.create(createCart_itemsDto, req, res);
  }

  @Get()
  findAll() {
    return this.cart_itemsService.findAll();
  }

  @Get('cart')
  getUserCart(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.cart_itemsService.getUserCart(req, res);
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
