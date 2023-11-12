import { PartialType } from '@nestjs/swagger';
import { CreateProductInfoDto } from './create-product_info.dto';

export class UpdateProductInfoDto extends PartialType(CreateProductInfoDto) {}
