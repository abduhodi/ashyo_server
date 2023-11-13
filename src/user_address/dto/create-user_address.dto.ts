import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateUser_addressDto {
  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the user', example: 1, required: true })
  user_id: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the address', example: 1, required: true })
  address_id: number;
}
