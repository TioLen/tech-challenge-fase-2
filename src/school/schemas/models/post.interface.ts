import { IDocente } from './docente.interface';

export interface IPost {
  id?: string;
  titulo: string;
  conteudo: string;
  autor: IDocente;
  status: 'rascunho' | 'publicado';
  createdAt?: Date;
  updatedAt?: Date;
}