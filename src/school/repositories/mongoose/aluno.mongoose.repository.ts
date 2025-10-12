import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IAluno } from "src/school/schemas/models/aluno.interface";
import { Aluno, AlunoDocument } from "src/school/schemas/aluno.schema";
import { AlunoRepository } from "../aluno.repository";

@Injectable()
export class AlunoRepositoryMongo implements AlunoRepository {
    constructor(
        @InjectModel(Aluno.name) private alunoModel: Model<AlunoDocument>,
    ) {}

    async createAluno(aluno: IAluno): Promise<IAluno> {
        const novoAluno = new this.alunoModel(aluno);
        return novoAluno.save();
    }

    async getAlunoById(alunoId: string): Promise<IAluno | null> {
        return this.alunoModel.findById(alunoId).exec();
    }

    async getAllAlunos(limit: number, page: number): Promise<IAluno[]> {
        const offset = (page - 1) * limit;
        return this.alunoModel.find().skip(offset).limit(limit).exec();
    }

    async getAlunosByTurma(turmaId: string, limit: number, page: number): Promise<IAluno[]> {
        const offset = (page - 1) * limit;
        return this.alunoModel.find({ turma: turmaId }).skip(offset).limit(limit).exec();
    }
    
    async updateAluno(alunoId: string, data: Partial<IAluno>): Promise<IAluno | null> {
        return this.alunoModel.findByIdAndUpdate(alunoId, data, { new: true }).exec();
    }

    async deleteAluno(alunoId: string): Promise<void> {
        await this.alunoModel.findByIdAndDelete(alunoId).exec();
    }
}