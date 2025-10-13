import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DocenteDocument = HydratedDocument<Docente>;

@Schema({ timestamps: true })
export class Docente {
  @Prop({ required: true })
  name: string;
  
  @Prop()
  age: number;

  @Prop({ required: true })
  materia: string;

  // Quebramos o ciclo referenciando 'Turma' como uma string.
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Turma' }] })
  turmas: mongoose.Types.ObjectId[];
}

export const DocenteSchema = SchemaFactory.createForClass(Docente);