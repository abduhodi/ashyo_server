import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAttributeGroupDto {
  @ApiProperty({
    description: 'Name of the attribute group',
    example: 'Example Memory',
  })
  @IsNotEmpty()
  @IsString()
  name: string; 
}
