import { IsString, IsOptional, IsInt, IsPositive } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  parent_id?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  position?: number;
}
