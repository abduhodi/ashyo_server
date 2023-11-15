import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAttributeGroupCategoryDto {
  @ApiProperty({ example: 1, description: 'AttributGroup id' })
  @IsNotEmpty()
  @IsNumber()
  attribute_group_id: number;

  @ApiProperty({ example: 1, description: 'Category id' })
  @IsNotEmpty()
  @IsNumber()
  category_id: number;
}
