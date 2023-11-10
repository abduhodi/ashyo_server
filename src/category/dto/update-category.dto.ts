import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @ApiProperty({ description: 'Name of the Category', example: 'Electronics' })
  name: string;

  @ApiProperty({
    description: 'Description of the Category',
    example: 'A category for devices',
  })
  description?: string;

  @ApiProperty({
    description: 'ID of the parent category',
    example: 1,
    required: false,
  })
  parent_id?: number;

  @ApiProperty({
    description: 'Position of the category',
    example: 2,
    required: false,
  })
  position?: number;
}
