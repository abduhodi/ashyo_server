import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductInfoDto {
  @ApiProperty({
    description: 'Id of the product',
    example: 'Example 12',
  })
  @IsNotEmpty()
  @IsNumber()
  product_id: number;

  @ApiProperty({
    description: 'Id of the attribute',
    example: 'Example 120',
  })
  @IsNotEmpty()
  @IsNumber()
  attribute_id: number;

  @ApiProperty({
    description: 'Value of the attribute',
    example: 'Example black',
  })
  @IsNotEmpty()
  @IsString()
  value: string;

  @ApiProperty({
    description: 'Let attribute show in main desc',
    example: 'Example true',
  })
  @IsOptional()
  @IsBoolean()
  show_in_main: boolean = true;
}
