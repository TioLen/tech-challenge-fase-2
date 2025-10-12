import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {HydratedDocument} from 'mongoose';
import { Docente } from './docente.schema';
import { Aluno } from './aluno.schema';

export type TurmaDocument = HydratedDocument<Turma>;

@Schema({ timestamps: true })
export class Turma {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Docente' }] })
  teachers: Docente[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Aluno' }] })
  students: Aluno[];
}

export const TurmaSchema = SchemaFactory.createForClass(Turma);