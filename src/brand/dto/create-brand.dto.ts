import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, IsPositive } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @ApiProperty({ description: 'Name of the Brand', example: 'Apple' })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'write description for this brand',
    example: 'gooddddd',
  })
  description: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'position of brand', example: 1 })
  position: number;

  @IsString()
  @ApiProperty({
    description: 'logo for this brand',
    example: '/logo.png',
  })
  logo_url: string;
}
