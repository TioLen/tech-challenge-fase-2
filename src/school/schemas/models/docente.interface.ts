import { ITurma } from './turma.interface';

export interface IDocente {
  id?: string;
  name: string;
  age?: number;
  materia: string;
  turmas?: ITurma[];
  createdAt?: Date;
  updatedAt?: Date;
}