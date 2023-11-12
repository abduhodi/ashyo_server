import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class CreateSaleDto {
  @ApiProperty({
    description: 'write start date for Sale',
    example: '2023-06-06',
  })

  start_date: string; 

  @ApiProperty({
    description: 'write end date for Sale',
    example: '2023-06-08',
  })

  end_date: string; 

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'write percent for this Sale',
    example: '55',
  })
  percent: number;
}
