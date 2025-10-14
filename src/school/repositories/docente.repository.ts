import { IDocente } from '../schemas/models/docente.interface';

export abstract class DocenteRepository {
  abstract createDocente(docente: IDocente): Promise<IDocente>;
  abstract getDocenteById(docenteId: string): Promise<IDocente | null>;
  abstract getAllDocentes(limit: number, page: number): Promise<IDocente[]>;
  abstract updateDocente(
    docenteId: string,
    data: Partial<IDocente>,
  ): Promise<IDocente | null>;
  abstract deleteDocente(docenteId: string): Promise<void>;
}
