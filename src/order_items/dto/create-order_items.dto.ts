import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateOrder_itemsDto {
  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the order', example: 1, required: true })
  order_id: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the product', example: 1, required: true })
  product_id: number;

  @IsInt()
  @ApiProperty({ description: 'quantity of the product', example: '2' })
  quantity: number;

  @IsInt()
  @ApiProperty({ description: 'total quantity of the products', example: '2' })
  subtotal: number;
}
