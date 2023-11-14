import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'ID of the category',
    example: 1,
    required: true,
  })
  category_id: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the brand', example: 1, required: true })
  brand_id: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'ID of the product_model',
    example: 1,
    required: true,
  })
  product_model_id: number;

  @IsString()
  @ApiProperty({ description: 'Description of product', example: 'Good one' })
  description: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'price of the product',
    example: 1000,
    required: true,
  })
  price: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'count of the product',
    example: 15,
    required: true,
  })
  count: number;
}
