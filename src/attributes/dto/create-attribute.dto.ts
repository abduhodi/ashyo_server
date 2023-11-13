import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAttributeDto {
  @ApiProperty({
    description: 'Name of the attribute',
    example: 'Example Color',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Position of the attribute', example: 1 })
  @IsOptional()
  @IsInt()
  position?: number = 1;

  @ApiProperty({
    description: 'Attribute Group ID of the attribute',
    example: 123,
  })
  @IsNotEmpty()
  @IsInt()
  attribute_group_id: number;
}
