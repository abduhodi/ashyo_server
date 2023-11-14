import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateProduct_mediaDto {
  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'ID of the product',
    example: 1,
    required: true,
  })
  product_id: number;

  @IsString()
  @ApiProperty({ description: 'url of product media', example: './product' })
  url: string;

  @IsString()
  @ApiProperty({ description: 'type of product media', example: 'image/jpg' })
  type: string;
}
