import { IAluno } from 'src/school/schemas/models/aluno.interface';

export abstract class AlunoRepository {
  abstract createAluno(aluno: IAluno): Promise<IAluno>;
  abstract getAlunoById(alunoId: string): Promise<IAluno | null>;
  abstract getAllAlunos(limit: number, page: number): Promise<IAluno[]>;
  abstract getAlunosByTurma(
    turmaId: string,
    limit: number,
    page: number,
  ): Promise<IAluno[]>;
  abstract updateAluno(
    alunoId: string,
    data: Partial<IAluno>,
  ): Promise<IAluno | null>;
  abstract deleteAluno(alunoId: string): Promise<void>;
}
