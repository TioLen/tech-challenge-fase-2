import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 1. IMPORTE TUDO QUE SERÁ USADO NO MÓDULO
// Schemas
import { Docente, DocenteSchema } from './schemas/docente.schema';
import { Aluno, AlunoSchema } from './schemas/aluno.schema';
import { Turma, TurmaSchema } from './schemas/turma.schema';
import { Post, PostSchema } from './schemas/post.schema';

// Repositórios Abstratos (Contratos)
import { DocenteRepository } from './repositories/docente.repository';
import { AlunoRepository } from './repositories/aluno.repository';
import { TurmaRepository } from './repositories/turma.repository';
import { PostRepository } from './repositories/post.repository';

// Repositórios Concretos (Implementações)
import { DocenteRepositoryMongo } from './repositories/mongoose/docente.mongoose.repository';
import { AlunoRepositoryMongo } from './repositories/mongoose/aluno.mongoose.repository';
import { TurmaRepositoryMongo } from './repositories/mongoose/turma.mongoose.repository';
import { PostRepositoryMongo } from './repositories/mongoose/post.mongoose.repository';

@Module({
    imports: [
        // 2. REGISTRE OS SCHEMAS
        MongooseModule.forFeature([
            { name: Docente.name, schema: DocenteSchema },
            { name: Aluno.name, schema: AlunoSchema },
            { name: Turma.name, schema: TurmaSchema },
            { name: Post.name, schema: PostSchema },
        ]),
    ],
    // 3. DECLARE OS PROVIDERS (AQUI ESTÁ A MÁGICA)
    providers: [
        {
            provide: DocenteRepository,
            useClass: DocenteRepositoryMongo,
        },
        {
            provide: AlunoRepository,
            useClass: AlunoRepositoryMongo,
        },
        {
            provide: TurmaRepository,
            useClass: TurmaRepositoryMongo,
        },
        {
            provide: PostRepository,
            useClass: PostRepositoryMongo,
        },
    ],
    // 4. EXPORTE OS REPOSITÓRIOS PARA QUE OUTROS MÓDULOS POSSAM USÁ-LOS
    exports: [
        DocenteRepository,
        AlunoRepository,
        TurmaRepository,
        PostRepository,
    ]
})
export class SchoolModule {}