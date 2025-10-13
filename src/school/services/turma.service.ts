import { Injectable } from '@nestjs/common';
import { TurmaRepository } from '../repositories/turma.repository';
import { ITurma } from '../schemas/models/turma.interface';

@Injectable()
export class TurmaService {
  constructor(private readonly turmaRepository: TurmaRepository) {}

  async create(turma: ITurma): Promise<ITurma> {
    return this.turmaRepository.createTurma(turma);
  }

  async findAll(limit: number, page: number): Promise<ITurma[]> {
    return this.turmaRepository.getAllTurmas(limit, page);
  }

  async findOne(id: string): Promise<ITurma | null> {
    return this.turmaRepository.getTurmaById(id);
  }

  async update(id: string, updateTurmaDto: Partial<ITurma>): Promise<ITurma | null> {
    return this.turmaRepository.updateTurma(id, updateTurmaDto);
  }

  async remove(id: string): Promise<void> {
    await this.turmaRepository.deleteTurma(id);
  }
  
  async addDocente(turmaId: string, docenteId: string): Promise<ITurma | null> {
    return this.turmaRepository.addDocenteToTurma(turmaId, docenteId);
  }
  
  async addAluno(turmaId: string, alunoId: string): Promise<ITurma | null> {
    return this.turmaRepository.addAlunoToTurma(turmaId, alunoId);
  }
}