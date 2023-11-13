import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the user', example: 1, required: true })
  user_id: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({ description: 'ID of the product', example: 1, required: true })
  product_id: number;

  @IsString()
  @ApiProperty({ description: 'Comment on product', example: 'Good one' })
  comment: string;
}
