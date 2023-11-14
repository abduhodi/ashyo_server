import { CreateCart_itemsDto } from './create-cart_items.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCart_itemsDto extends PartialType(CreateCart_itemsDto) {}
