import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IAluno } from "@/school/schemas/models/aluno.interface";
import { Aluno, AlunoDocument } from "src/school/schemas/aluno.schema";
import { AlunoRepository } from "../aluno.repository";

@Injectable()
export class AlunoRepositoryMongo implements AlunoRepository {
    constructor(
        @InjectModel(Aluno.name) private alunoModel: Model<AlunoDocument>,
    ) {}

    async createAluno(aluno: IAluno): Promise<IAluno> {
        const novoAluno = new this.alunoModel(aluno);
        const savedAluno = await novoAluno.save();
        return savedAluno.toObject() as unknown as IAluno;
    }

    async getAlunoById(alunoId: string): Promise<IAluno | null> {
        const aluno = await this.alunoModel.findById(alunoId).populate('turma').exec();
        return aluno ? aluno.toObject() as unknown as IAluno : null;
    }

    async getAllAlunos(limit: number, page: number): Promise<IAluno[]> {
        const offset = (page - 1) * limit;
        const alunos = await this.alunoModel.find().skip(offset).limit(limit).populate('turma').exec();
        return alunos.map(aluno => aluno.toObject() as unknown as IAluno);
    }

    async getAlunosByTurma(turmaId: string, limit: number, page: number): Promise<IAluno[]> {
        const offset = (page - 1) * limit;
        const alunos = await this.alunoModel.find({ turma: turmaId }).skip(offset).limit(limit).exec();
        return alunos.map(aluno => aluno.toObject() as unknown as IAluno);
    }
    
    async updateAluno(alunoId: string, data: Partial<IAluno>): Promise<IAluno | null> {
        const aluno = await this.alunoModel.findByIdAndUpdate(alunoId, data, { new: true }).populate('turma').exec();
        return aluno ? aluno.toObject() as unknown as IAluno : null;
    }

    async deleteAluno(alunoId: string): Promise<void> {
        await this.alunoModel.findByIdAndDelete(alunoId).exec();
    }
}