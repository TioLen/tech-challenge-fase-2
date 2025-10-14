import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TurmaService } from '../services/turma.service';
import {
  CreateTurmaSchema,
  UpdateTurmaSchema,
  ZodValidationPipe,
  type CreateTurmaData,
  type UpdateTurmaData,
} from '../../shared';

@Controller('turmas')
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(CreateTurmaSchema))
    createTurmaData: CreateTurmaData,
  ) {
    return this.turmaService.create(createTurmaData);
  }

  @Get()
  findAll(
    @Query('limit') limit: string = '10',
    @Query('page') page: string = '1',
  ) {
    return this.turmaService.findAll(parseInt(limit, 10), parseInt(page, 10));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turmaService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdateTurmaSchema))
    updateTurmaData: UpdateTurmaData,
  ) {
    return this.turmaService.update(id, updateTurmaData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turmaService.remove(id);
  }

  @Post(':turmaId/docentes/:docenteId')
  addDocente(
    @Param('turmaId') turmaId: string,
    @Param('docenteId') docenteId: string,
  ) {
    return this.turmaService.addDocente(turmaId, docenteId);
  }

  @Post(':turmaId/alunos/:alunoId')
  addAluno(
    @Param('turmaId') turmaId: string,
    @Param('alunoId') alunoId: string,
  ) {
    return this.turmaService.addAluno(turmaId, alunoId);
  }
}
