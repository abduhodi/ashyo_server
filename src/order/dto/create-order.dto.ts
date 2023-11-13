import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the user', example: 1, required: true })
  user_id: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the address', example: 1, required: true })
  address_id: number;

  @IsString()
  @ApiProperty({ description: 'full name of the orderer', example: 'John Doe' })
  full_name: string;

  @IsString()
  @ApiProperty({
    description: 'phone number of the orderer',
    example: '+998936996008',
  })
  phone_number: string;

  @IsString()
  @ApiProperty({
    description: 'status of the order',
    example: 'delivered',
  })
  status: string;
}
