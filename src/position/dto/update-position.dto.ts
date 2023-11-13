import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdatePositionDto {
    
    @ApiProperty({example: [1, 3, 2], description: "Brands position"})
    @IsOptional()
    brand_positioning: [number];

    @ApiProperty({example: [1, 3, 2, 5], description: "Brands position"})
    @IsOptional()
    attribute_positioning: [number];

    @ApiProperty({example: [1, 3, 2], description: "Brands position"})
    @IsOptional()
    category_positioning: [number];

    @ApiProperty({example: [1, 3, 2], description: "Brands position"})
    @IsOptional()
    attribute_group_positioning: [number];
}
