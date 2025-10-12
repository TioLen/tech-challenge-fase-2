import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Turma } from './turma.schema';

export type DocenteDocument = HydratedDocument<Docente>;

@Schema({ timestamps: true })
export class Docente {
  @Prop({ required: true })
  name: string;
  
  @Prop()
  age: number;

  @Prop({ required: true })
  materia: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Turma' }] })
  turmas: Turma[];
}

export const DocenteSchema = SchemaFactory.createForClass(Docente);