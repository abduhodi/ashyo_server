import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSaleModelDto } from './create-sale_model.dto';

export class UpdateSaleModelDto extends PartialType(CreateSaleModelDto) {
  @ApiProperty({
    description: 'write id for this model',
    example: 2,
  })
  model_id: number;

  @ApiProperty({
    description: 'write id for this sale',
    example: 2,
  })
  sale_id: number;
}
