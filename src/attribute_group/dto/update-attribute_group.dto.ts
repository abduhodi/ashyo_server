import { PartialType } from '@nestjs/swagger';
import { CreateAttributeGroupDto } from './create-attribute_group.dto';

export class UpdateAttributeGroupDto extends PartialType(CreateAttributeGroupDto) {}
