import { PartialType } from '@nestjs/swagger';
import { CreateAttributeGroupCategoryDto } from './create-attribute-group_category.dto';

export class UpdateAttributeGroupCategoryDto extends PartialType(CreateAttributeGroupCategoryDto) {}
