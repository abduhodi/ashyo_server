import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateViewDto {
  @ApiProperty({
    description: 'Id of the product',
    example: 'Example 12',
  })
  @IsNotEmpty()
  @IsNumber()
  product_id: number;
}
