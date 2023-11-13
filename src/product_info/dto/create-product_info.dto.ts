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
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  product_id: number;

  @ApiProperty({
    description: 'Id of the attribute',
    example: '1',
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
    example: 'true',
  })
  @IsOptional()
  @IsBoolean()
  show_in_main: boolean;
}
