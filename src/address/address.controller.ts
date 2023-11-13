import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Address")
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @ApiOperation({summary: "| Create address"})
  @Post("create")
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @ApiOperation({summary: "| Find all addresses"})
  @Get("list")
  findAll() {
    return this.addressService.findAll();
  }

  @ApiOperation({summary: "| Get single address"})
  @Get('single/:id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }

  @ApiOperation({summary: "| Update address"})
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(+id, updateAddressDto);
  }

  @ApiOperation({summary: "| Delete address"})
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(+id);
  }
}
