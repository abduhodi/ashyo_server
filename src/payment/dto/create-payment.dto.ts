import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({
    description: 'Id of the user',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @ApiProperty({
    description: 'Id of the order',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  order_id: number;

  @ApiProperty({
    description: 'payment method',
    example: 'Example click',
  })
  @IsNotEmpty()
  @IsString()
  payment_method: string;
}
