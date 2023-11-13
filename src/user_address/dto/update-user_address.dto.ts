import { CreateUser_addressDto } from './create-user_address.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUser_addressDto extends PartialType(CreateUser_addressDto) {}
