import { IsNotEmpty, IsPhoneNumber, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({
    description: 'User phone number',
    example: '+1234567890',
  })
  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  @IsPhoneNumber(null, { message: 'Invalid phone number format' })
  phone: string;

  @ApiProperty({
    description: 'User password',
    example: 'strongPassword123',
  })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @MinLength(5, { message: 'Password must be at least 8 characters long' })
  password: string;
}
