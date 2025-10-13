import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Docente, DocenteSchema } from './schemas/docente.schema';
import { Aluno, AlunoSchema } from './schemas/aluno.schema';
import { Turma, TurmaSchema } from './schemas/turma.schema';
import { Post, PostSchema } from './schemas/post.schema';

import { DocenteRepository } from './repositories/docente.repository';
import { AlunoRepository } from './repositories/aluno.repository';
import { TurmaRepository } from './repositories/turma.repository';
import { PostRepository } from './repositories/post.repository';

import { DocenteRepositoryMongo } from './repositories/mongoose/docente.mongoose.repository';
import { AlunoRepositoryMongo } from './repositories/mongoose/aluno.mongoose.repository';
import { TurmaRepositoryMongo } from './repositories/mongoose/turma.mongoose.repository';
import { PostRepositoryMongo } from './repositories/mongoose/post.mongoose.repository';

import { AlunoService } from './services/aluno.service';
import { DocenteService } from './services/docente.service';
import { PostService } from './services/post.service';
import { TurmaService } from './services/turma.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Docente.name, schema: DocenteSchema },
            { name: Aluno.name, schema: AlunoSchema },
            { name: Turma.name, schema: TurmaSchema },
            { name: Post.name, schema: PostSchema },
        ]),
    ],
    providers: [
        AlunoService,
        DocenteService,
        PostService,
        TurmaService,
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
    exports: [
        AlunoService,
        DocenteService,
        PostService,
        TurmaService,
    ]
})
export class SchoolModule {}