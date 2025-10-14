import { ITurma } from './turma.interface';

export interface IAluno {
  id?: string;
  name: string;
  age?: number;
  turma: ITurma;
  createdAt?: Date;
  updatedAt?: Date;
}
