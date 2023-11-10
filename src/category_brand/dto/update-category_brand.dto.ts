import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCategoryBrandDto } from './create-category_brand.dto';

export class UpdateCategoryBrandDto extends PartialType(
  CreateCategoryBrandDto,
) {
  @ApiProperty({ description: 'category_id of brand', example: 1 })
  category_id: number;

  @ApiProperty({ description: 'id of brand', example: 2 })
  brand_id: number;
}
