import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';
import { CreateProductModelDto } from './create-product_model.dto';

export class UpdateProductModelDto extends PartialType(CreateProductModelDto) {}
