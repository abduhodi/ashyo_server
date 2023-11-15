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
    description: 'payment date of order',
    example: '2024-06-06',
  })
  @IsNotEmpty()
  payment_date: Date;

  @ApiProperty({
    description: 'total amount of payment',
    example: 5600,
  })
  @IsNotEmpty()
  @IsNumber()
  total_amount: number;

  @ApiProperty({
    description: 'payment method',
    example: 'click',
  })
  @IsNotEmpty()
  @IsString()
  payment_method: string;

  @ApiProperty({
    description: 'status of payment',
    example: 'success',
  })
  @IsNotEmpty()
  @IsString()
  payment_status: string;
}
