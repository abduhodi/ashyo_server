import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class CreateCategoryBrandDto {
  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'category_id of brand', example: 1 })
  category_id: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'id of brand', example: 1 })
  brand_id: number;
}
