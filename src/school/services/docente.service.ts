import { Injectable } from '@nestjs/common';
import { DocenteRepository } from '../repositories/docente.repository';
import { IDocente } from '../schemas/models/docente.interface';

@Injectable()
export class DocenteService {
  constructor(private readonly docenteRepository: DocenteRepository) {}

  async create(docente: IDocente): Promise<IDocente> {
    return this.docenteRepository.createDocente(docente);
  }

  async findAll(limit: number, page: number): Promise<IDocente[]> {
    return this.docenteRepository.getAllDocentes(limit, page);
  }

  async findOne(id: string): Promise<IDocente | null> {
    return this.docenteRepository.getDocenteById(id);
  }

  async update(
    id: string,
    updateDocenteData: Partial<IDocente>,
  ): Promise<IDocente | null> {
    return this.docenteRepository.updateDocente(id, updateDocenteData);
  }

  async remove(id: string): Promise<void> {
    await this.docenteRepository.deleteDocente(id);
  }
}
