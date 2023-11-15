import { ApiProperty } from '@nestjs/swagger';
import { notEqual } from 'assert';
import { IsString, IsOptional, IsInt, IsPositive, isNotEmpty, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
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
}
