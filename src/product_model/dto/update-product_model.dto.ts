import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';
import { CreateProductModelDto } from './create-product_model.dto';

export class UpdateProductModelDto extends PartialType(CreateProductModelDto) {
  @ApiProperty({
    description: 'write category for this brand',
    example: 'electronicsss',
  })
  name: string;

  @ApiProperty({
    description: 'write desc for this brand',
    example: 'bad',
  })
  description: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'id of category_brand', example: 1 })
  category_brand_id: number;
}
