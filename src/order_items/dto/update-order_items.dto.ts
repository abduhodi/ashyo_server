import { CreateOrder_itemsDto } from './create-order_items.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateOrder_itemsDto extends PartialType(CreateOrder_itemsDto) {}
