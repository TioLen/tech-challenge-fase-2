import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Schemas
import { Docente, DocenteSchema } from './schemas/docente.schema';
import { Aluno, AlunoSchema } from './schemas/aluno.schema';
import { Turma, TurmaSchema } from './schemas/turma.schema';
import { Post, PostSchema } from './schemas/post.schema';

// Repositórios
import { DocenteRepository } from './repositories/docente.repository';
import { AlunoRepository } from './repositories/aluno.repository';
import { TurmaRepository } from './repositories/turma.repository';
import { PostRepository } from './repositories/post.repository';
import { DocenteRepositoryMongo } from './repositories/mongoose/docente.mongoose.repository';
import { AlunoRepositoryMongo } from './repositories/mongoose/aluno.mongoose.repository';
import { TurmaRepositoryMongo } from './repositories/mongoose/turma.mongoose.repository';
import { PostRepositoryMongo } from './repositories/mongoose/post.mongoose.repository';

// Services
import { AlunoService } from './services/aluno.service';
import { DocenteService } from './services/docente.service';
import { PostService } from './services/post.service';
import { TurmaService } from './services/turma.service';

// Controllers
import { AlunoController } from './controllers/aluno.controller';
import { DocenteController } from './controllers/docente.controller';
import { PostController } from './controllers/post.controller';
import { TurmaController } from './controllers/turma.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Docente.name, schema: DocenteSchema },
      { name: Aluno.name, schema: AlunoSchema },
      { name: Turma.name, schema: TurmaSchema },
      { name: Post.name, schema: PostSchema },
    ]),
  ],
  controllers: [
    // Adicione os controllers aqui
    AlunoController,
    DocenteController,
    PostController,
    TurmaController,
  ],
  providers: [
    // Services
    AlunoService,
    DocenteService,
    PostService,
    TurmaService,
    // Repositories
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
    // Exporte os serviços se precisar usá-los em outros módulos
    AlunoService,
    DocenteService,
    PostService,
    TurmaService,
  ],
})
export class SchoolModule {}
