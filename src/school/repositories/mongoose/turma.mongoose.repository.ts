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
        return (await novaTurma.save()).toObject() as unknown as ITurma;
    }

    async getTurmaById(turmaId: string): Promise<ITurma | null> {
        const turma = await this.turmaModel.findById(turmaId).exec();
        return turma ? turma.toObject() as unknown as ITurma : null;
    }

    async getAllTurmas(limit: number, page: number): Promise<ITurma[]> {
        const offset = (page - 1) * limit;
        const turmas = await this.turmaModel.find().skip(offset).limit(limit).exec();
        return turmas.map(turma => turma.toObject() as unknown as ITurma);
    }

    async updateTurma(turmaId: string, data: Partial<ITurma>): Promise<ITurma | null> {
        const turma = await this.turmaModel.findByIdAndUpdate(turmaId, data, { new: true }).exec();
        return turma ? turma.toObject() as unknown as ITurma : null;
    }

    async deleteTurma(turmaId: string): Promise<void> {
        await this.turmaModel.findByIdAndDelete(turmaId).exec();
    }
    
    async addDocenteToTurma(turmaId: string, docenteId: string): Promise<ITurma | null> {
        const turma = await this.turmaModel.findByIdAndUpdate(
            turmaId,
            { $addToSet: { teachers: docenteId } },
            { new: true },
        ).exec();
        return turma ? turma.toObject() as unknown as ITurma : null;
    }
    
    async addAlunoToTurma(turmaId: string, alunoId: string): Promise<ITurma | null> {
        const turma = await this.turmaModel.findByIdAndUpdate(
            turmaId,
            { $addToSet: { students: alunoId } },
            { new: true },
        ).exec();
        return turma ? turma.toObject() as unknown as ITurma : null;
    }
}