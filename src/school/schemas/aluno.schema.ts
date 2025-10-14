import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AlunoDocument = HydratedDocument<Aluno>;

@Schema({ timestamps: true })
export class Aluno {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Turma', required: true })
  turma: mongoose.Types.ObjectId;
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);
