import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UsePipes } from '@nestjs/common';
import { AlunoService } from '../services/aluno.service';
import { CreateAlunoSchema, UpdateAlunoSchema, ZodValidationPipe, type CreateAlunoData, type UpdateAlunoData } from '../../shared';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateAlunoSchema))
  create(@Body() createAlunoData: CreateAlunoData) {
    const alunoData = {
      ...createAlunoData,
      turma: createAlunoData.turma as any,
    };
    return this.alunoService.create(alunoData as any);
  }

  @Get()
  findAll(@Query('limit') limit: string = '10', @Query('page') page: string = '1') {
    return this.alunoService.findAll(parseInt(limit, 10), parseInt(page, 10));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunoService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(UpdateAlunoSchema))
  update(@Param('id') id: string, @Body() updateAlunoData: UpdateAlunoData) {
    const alunoData = {
      ...updateAlunoData,
      turma: updateAlunoData.turma as any,
    };
    return this.alunoService.update(id, alunoData as any);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunoService.remove(id);
  }
}