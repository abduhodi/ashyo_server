import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiOperation({ summary: 'Create a new payment' })
  @ApiResponse({
    status: 201,
    description: 'The payment has been successfully created.',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @ApiOperation({ summary: 'Get all payments' })
  @ApiResponse({
    status: 200,
    description: 'Return a list of all payments.',
  })
  @Get()
  findAll() {
    return this.paymentService.findAll();
  }

  @ApiOperation({ summary: 'Get payment  by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the payment with the specified ID.',
  })
  @ApiResponse({ status: 404, description: 'Payment not found.' })
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.findOne(id);
  }

  @ApiOperation({ summary: 'Update payment by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the updated payment.',
  })
  @ApiResponse({ status: 404, description: 'Payment not found.' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  @ApiOperation({ summary: 'Delete payment by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the deleted payment.',
  })
  @ApiResponse({ status: 404, description: 'Payment not found.' })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.remove(id);
  }
}
