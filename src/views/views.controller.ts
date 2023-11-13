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
import { ViewsService } from './views.service';
import { CreateViewDto } from './dto/create-view.dto';
import { UpdateViewDto } from './dto/update-view.dto';

@ApiTags('Views')
@Controller('views')
export class ViewsController {
  constructor(private readonly viewsService: ViewsService) {}

  @ApiOperation({ summary: 'Create a new view' })
  @ApiResponse({
    status: 201,
    description: 'The view has been successfully created.',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createViewDto: CreateViewDto) {
    return this.viewsService.create(createViewDto);
  }

  @ApiOperation({ summary: 'Get all views' })
  @ApiResponse({
    status: 200,
    description: 'Return a list of all views.',
  })
  @Get()
  findAll() {
    return this.viewsService.findAll();
  }

  @ApiOperation({ summary: 'Get view  by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the view with the specified ID.',
  })
  @ApiResponse({ status: 404, description: 'View not found.' })
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.viewsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update view by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the updated view.',
  })
  @ApiResponse({ status: 404, description: 'View not found.' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateViewDto: UpdateViewDto,
  ) {
    return this.viewsService.update(id, updateViewDto);
  }

  @ApiOperation({ summary: 'Delete view by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the deleted view.',
  })
  @ApiResponse({ status: 404, description: 'View not found.' })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.viewsService.remove(id);
  }
}
