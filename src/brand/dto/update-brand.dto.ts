import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @ApiProperty({ description: 'Name of the Brand', example: 'Samsung' })
  name: string;

  @ApiProperty({
    description: 'write description for this brand',
    example: 'the best',
  })
  description: string;

  @ApiProperty({ description: 'position of brand', example: 2 })
  position: number;

  @ApiProperty({
    description: 'logo for this brand',
    example: '/logo.png',
  })
  logo_url: string;
}
