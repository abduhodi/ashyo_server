import { PartialType } from '@nestjs/swagger';
import { CreateAttributeGroupProductModelDto } from './create-attribute-group_product-model.dto';

export class UpdateAttributeGroupProductModelDto extends PartialType(CreateAttributeGroupProductModelDto) {}
