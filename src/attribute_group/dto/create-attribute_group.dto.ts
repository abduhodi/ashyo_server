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

  @ApiProperty({ description: 'Position of the attribute group', example: 1 })
  @IsOptional()
  @IsInt()
  position?: number = 1;

  @ApiProperty({
    description: 'Category ID of the attribute group',
    example: 123,
  })
  @IsNotEmpty()
  @IsInt()
  category_id: number;
}
