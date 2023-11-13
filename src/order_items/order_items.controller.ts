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
import { Order_itemsService } from './order_items.service';
import { CreateOrder_itemsDto } from './dto/create-order_items.dto';
import { UpdateOrder_itemsDto } from './dto/update-order_items.dto';

@ApiTags('Order_items')
@Controller('order_items')
export class Order_itemsController {
  constructor(private readonly order_itemsService: Order_itemsService) {}

  @Post()
  create(@Body() createOrder_itemsDto: CreateOrder_itemsDto) {
    return this.order_itemsService.create(createOrder_itemsDto);
  }

  @Get()
  findAll() {
    return this.order_itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.order_itemsService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrder_itemsDto: UpdateOrder_itemsDto,
  ) {
    return this.order_itemsService.update(Number(id), updateOrder_itemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.order_itemsService.remove(Number(id));
  }
}
