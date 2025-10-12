import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Docente, DocenteSchema } from './schemas/docente.schema';
import { Aluno, AlunoSchema } from './schemas/aluno.schema';
import { Turma, TurmaSchema } from './schemas/turma.schema';
import { Post, PostSchema } from './schemas/post.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Docente.name,
                schema: DocenteSchema
            },
            {
                name: Aluno.name,
                schema: AlunoSchema
            },
            {
                name: Turma.name,
                schema: TurmaSchema
            },
            {
                name: Post.name,
                schema: PostSchema
            },
        ]),
    ],
})
export class SchoolModule {}
