import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Aluno } from './aluno.schema';
import { Docente } from './docente.schema';

export type TurmaDocument = HydratedDocument<Turma>;

@Schema({ timestamps: true })
export class Turma {
  @Prop({ required: true })
  name: string;

  // Quebramos o ciclo usando uma função no 'ref' para "atrasar" a referência.
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: () => Docente.name }] })
  teachers: Docente[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Aluno' }] })
  students: Aluno[];
}

export const TurmaSchema = SchemaFactory.createForClass(Turma);