import { PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from './login.auth';

export class UpdateAuthDto extends PartialType(LoginAuthDto) {}
