import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Docente } from './docente.schema';

export type TurmaDocument = HydratedDocument<Turma>;

@Schema({ timestamps: true })
export class Turma {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: () => Docente.name }],
  })
  teachers: Docente[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Aluno' }] })
  students: mongoose.Types.ObjectId[];
}

export const TurmaSchema = SchemaFactory.createForClass(Turma);
