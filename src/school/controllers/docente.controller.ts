import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes } from '@nestjs/common';
import { DocenteService } from '../services/docente.service';
import { CreateDocenteSchema, UpdateDocenteSchema, ZodValidationPipe, type CreateDocenteData, type UpdateDocenteData } from '../../shared';

@Controller('docentes')
export class DocenteController {
  constructor(private readonly docenteService: DocenteService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateDocenteSchema))
  create(@Body() createDocenteData: CreateDocenteData) {
    return this.docenteService.create(createDocenteData);
  }

  @Get()
  findAll(@Query('limit') limit: string = '10', @Query('page') page: string = '1') {
    return this.docenteService.findAll(parseInt(limit, 10), parseInt(page, 10));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docenteService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(UpdateDocenteSchema))
  update(@Param('id') id: string, @Body() updateDocenteData: UpdateDocenteData) {
    return this.docenteService.update(id, updateDocenteData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docenteService.remove(id);
  }
}