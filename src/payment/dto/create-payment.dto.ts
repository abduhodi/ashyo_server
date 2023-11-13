import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty({
    description: 'Id of the user',
    example: 'Example 12',
  })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @ApiProperty({
    description: 'Id of the order',
    example: 'Example 12',
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
