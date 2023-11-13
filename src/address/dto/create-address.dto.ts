import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({
    example: 'lat: 232, lon: 3432',
    description: '| Address location',
  })
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    example: 'Farobiy kochasi 23-uy',
    description: '| Address street',
  })
  @IsNotEmpty()
  street: string;

  @ApiProperty({ example: 2, description: '| Address district' })
  @IsNotEmpty()
  district_id?: number;
}
