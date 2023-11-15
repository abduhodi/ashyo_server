import { PartialType } from '@nestjs/swagger';
import { CreateAuthDto } from './login.auth';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
