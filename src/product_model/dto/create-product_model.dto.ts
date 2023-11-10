import { IsString, IsOptional, IsInt, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductModelDto {
  @IsString()
  @ApiProperty({
    description: 'write category for this brand',
    example: 'electronics',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'write desc for this brand',
    example: 'goooodddd',
  })
  description: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'id of category_brand', example: 1 })
  brand_id: number;
}
