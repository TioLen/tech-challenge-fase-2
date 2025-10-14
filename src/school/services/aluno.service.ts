import { Injectable } from '@nestjs/common';
import { AlunoRepository } from '../repositories/aluno.repository';
import { IAluno } from '../schemas/models/aluno.interface';

@Injectable()
export class AlunoService {
  constructor(private readonly alunoRepository: AlunoRepository) {}

  async create(aluno: IAluno): Promise<IAluno> {
    return this.alunoRepository.createAluno(aluno);
  }

  async findAll(limit: number, page: number): Promise<IAluno[]> {
    return this.alunoRepository.getAllAlunos(limit, page);
  }

  async findByTurma(
    turmaId: string,
    limit: number,
    page: number,
  ): Promise<IAluno[]> {
    return this.alunoRepository.getAlunosByTurma(turmaId, limit, page);
  }

  async findOne(id: string): Promise<IAluno | null> {
    return this.alunoRepository.getAlunoById(id);
  }

  async update(
    id: string,
    updateAlunoData: Partial<IAluno>,
  ): Promise<IAluno | null> {
    return this.alunoRepository.updateAluno(id, updateAlunoData);
  }

  async remove(id: string): Promise<void> {
    await this.alunoRepository.deleteAluno(id);
  }
}
