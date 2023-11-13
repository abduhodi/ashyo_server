
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDistrictDto {
    @ApiProperty({example: "Toshkent", description: "| District name"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: "null", description: "| District parent", default: null})
    @IsOptional()
    parent_id: number;
}
