import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDistrictDto } from './create-district.dto';

export class UpdateDistrictDto extends PartialType(CreateDistrictDto) {
    @ApiProperty({ description: 'Name of the District', example: 'District' })
    name: string;
}
