import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSaleDto } from './create-sale.dto';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
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

  @ApiProperty({
    description: 'write percent for this Sale',
    example: '50',
  })
  percent: number;
}
