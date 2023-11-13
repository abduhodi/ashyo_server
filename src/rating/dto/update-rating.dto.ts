import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRatingDto } from './create-rating.dto';

export class UpdateRatingDto extends PartialType(CreateRatingDto) {
    @ApiProperty({ description: 'rating in number', example: '10' })
    rating?: number;

    @ApiProperty({
      description: 'ID of the user',
      example: 1,
      required: false,
    })
    user_id?: number;

    @ApiProperty({
      description: 'ID of the product',
      example: 1,
      required: false,
    })
    product_id?: number;
}
