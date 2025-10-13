import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ITurma } from "@/school/schemas/models/turma.interface";
import { Turma, TurmaDocument } from "src/school/schemas/turma.schema";
import { TurmaRepository } from "../turma.repository";

@Injectable()
export class TurmaRepositoryMongo implements TurmaRepository {
    constructor(
        @InjectModel(Turma.name) private turmaModel: Model<TurmaDocument>,
    ) {}

    async createTurma(turma: ITurma): Promise<ITurma> {
        const novaTurma = new this.turmaModel(turma);
        return novaTurma.save();
    }

    async getTurmaById(turmaId: string): Promise<ITurma | null> {
        return this.turmaModel.findById(turmaId).exec();
    }

    async getAllTurmas(limit: number, page: number): Promise<ITurma[]> {
        const offset = (page - 1) * limit;
        return this.turmaModel.find().skip(offset).limit(limit).exec();
    }

    async updateTurma(turmaId: string, data: Partial<ITurma>): Promise<ITurma | null> {
        return this.turmaModel.findByIdAndUpdate(turmaId, data, { new: true }).exec();
    }

    async deleteTurma(turmaId: string): Promise<void> {
        await this.turmaModel.findByIdAndDelete(turmaId).exec();
    }
    
    async addDocenteToTurma(turmaId: string, docenteId: string): Promise<ITurma | null> {
        return this.turmaModel.findByIdAndUpdate(
            turmaId,
            { $addToSet: { teachers: docenteId } },
            { new: true },
        ).exec();
    }
    
    async addAlunoToTurma(turmaId: string, alunoId: string): Promise<ITurma | null> {
        return this.turmaModel.findByIdAndUpdate(
            turmaId,
            { $addToSet: { students: alunoId } },
            { new: true },
        ).exec();
    }
}