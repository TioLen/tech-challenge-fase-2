import { IDocente } from './docente.interface';
import { IAluno } from './aluno.interface';

export interface ITurma {
  id?: string;
  name: string;
  teachers?: IDocente[];
  students?: IAluno[];
  createdAt?: Date;
  updatedAt?: Date;
}