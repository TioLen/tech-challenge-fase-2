import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Docente } from './docente.schema';

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  conteudo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Docente', required: true })
  autor: Docente;

  @Prop({ default: 'rascunho' })
  status: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);