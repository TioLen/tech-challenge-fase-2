import { ITurma } from "src/school/schemas/models/turma.interface";

export abstract class TurmaRepository {
    abstract createTurma(turma: ITurma): Promise<ITurma>;
    abstract getTurmaById(turmaId: string): Promise<ITurma | null>;
    abstract getAllTurmas(limit: number, page: number): Promise<ITurma[]>;
    abstract updateTurma(turmaId: string, data: Partial<ITurma>): Promise<ITurma | null>;
    abstract deleteTurma(turmaId: string): Promise<void>;
    abstract addDocenteToTurma(turmaId: string, docenteId: string): Promise<ITurma | null>;
    abstract addAlunoToTurma(turmaId: string, alunoId: string): Promise<ITurma | null>;
}