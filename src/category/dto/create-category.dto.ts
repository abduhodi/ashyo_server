import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, IsPositive } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @ApiProperty({ description: 'Name of the Category', example: 'Electronics' })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Description of the Category',
    example: 'A category for devices',
  })
  description?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'ID of the parent category',
    example: 1,
    required: false,
  })
  parent_id?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Position of the category',
    example: 1,
    required: false,
  })
  position?: number;
}
