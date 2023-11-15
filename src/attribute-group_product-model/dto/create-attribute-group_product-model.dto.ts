import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateAttributeGroupProductModelDto {
  @ApiProperty({ example: 1, description: 'AttributGroup id' })
  @IsNotEmpty()
  @IsNumber()
  attribute_group_id: number;

  @ApiProperty({ example: 1, description: 'ProductModel id' })
  @IsNotEmpty()
  @IsNumber()
  product_model_id: number;
}
