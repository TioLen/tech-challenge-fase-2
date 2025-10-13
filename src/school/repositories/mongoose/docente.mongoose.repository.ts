import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IDocente } from "@/school/schemas/models/docente.interface";
import { Docente, DocenteDocument } from "src/school/schemas/docente.schema";
import { DocenteRepository } from "../docente.repository";

@Injectable()
export class DocenteRepositoryMongo implements DocenteRepository {
    constructor(
        @InjectModel(Docente.name) private docenteModel: Model<DocenteDocument>,
    ) {}

    async createDocente(docente: IDocente): Promise<IDocente> {
        const novoDocente = new this.docenteModel(docente);
        return (await novoDocente.save()).toObject() as unknown as IDocente;
    }
    
    async getDocenteById(docenteId: string): Promise<IDocente | null> {
        const docente = await this.docenteModel.findById(docenteId).exec();
        return docente ? docente.toObject() as unknown as IDocente : null;
    }

    async getAllDocentes(limit: number, page: number): Promise<IDocente[]> {
        const offset = (page - 1) * limit;
        const docentes = await this.docenteModel.find().skip(offset).limit(limit).exec();
        return docentes.map(docente => docente.toObject() as unknown as IDocente);
    }

    async updateDocente(docenteId: string, data: Partial<IDocente>): Promise<IDocente | null> {
        const docente = await this.docenteModel.findByIdAndUpdate(docenteId, data, { new: true }).exec();
        return docente ? docente.toObject() as unknown as IDocente : null;
    }

    async deleteDocente(docenteId: string): Promise<void> {
        await this.docenteModel.findByIdAndDelete(docenteId).exec();
    }
}