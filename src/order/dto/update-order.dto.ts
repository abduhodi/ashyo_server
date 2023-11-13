import { CreateOrderDto } from './create-order.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
