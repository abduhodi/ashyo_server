import { CreateProduct_mediaDto } from './create-product_media.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProduct_mediaDto extends PartialType(
  CreateProduct_mediaDto,
) {}
