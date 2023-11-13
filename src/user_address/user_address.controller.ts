import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User_addressService } from './user_address.service';
import { CreateUser_addressDto } from './dto/create-user_address.dto';
import { UpdateUser_addressDto } from './dto/update-user_address.dto';

@ApiTags('User_address')
@Controller('user-address')
export class User_addressController {
  constructor(private readonly user_addressService: User_addressService) {}

  @Post()
  create(@Body() createUser_addressDto: CreateUser_addressDto) {
    return this.user_addressService.create(createUser_addressDto);
  }

  @Get()
  findAll() {
    return this.user_addressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user_addressService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateUser_addressDto,
  ) {
    return this.user_addressService.update(Number(id), updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.user_addressService.remove(Number(id));
  }
}
