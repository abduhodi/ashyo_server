import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDistrictDto {
  @IsString()
  @ApiProperty({ description: 'Name of the District', example: 'District' })
  name: string;
}
