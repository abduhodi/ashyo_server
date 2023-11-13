import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateSaleModelDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'write id for this model',
    example: 1,
  })
  model_id: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'write id for this sale',
    example: 1,
  })
  sale_id: number;
}
