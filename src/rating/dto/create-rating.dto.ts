import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, IsPositive } from 'class-validator';

export class CreateRatingDto {
  @IsInt()
  @ApiProperty({ description: 'rating in number', example: '10' })
  rating: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'ID of the user',
    example: 1,
    required: false,
  })
  user_id: number;
  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'ID of the product',
    example: 1,
    required: false,
  })
  product_id: number;
}
