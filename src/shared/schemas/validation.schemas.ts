import { z } from 'zod';

export const CreatePostSchema = z.object({
  titulo: z.string().min(1, 'Título é obrigatório'),
  conteudo: z.string().min(1, 'Conteúdo é obrigatório'),
  autor: z.string().min(1, 'Autor é obrigatório'),
  status: z.enum(['rascunho', 'publicado']).optional().default('rascunho'),
});

export const UpdatePostSchema = CreatePostSchema.partial();

export const CreateTurmaSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
});

export const UpdateTurmaSchema = CreateTurmaSchema.partial();

export const CreateDocenteSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  age: z.number().int().positive().optional(),
  materia: z.string().min(1, 'Matéria é obrigatória'),
});

export const UpdateDocenteSchema = CreateDocenteSchema.partial();

export const CreateAlunoSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  age: z.number().int().positive().optional(),
  turma: z.string().min(1, 'Turma é obrigatória'),
});

export const UpdateAlunoSchema = CreateAlunoSchema.partial();

export type CreatePostData = z.infer<typeof CreatePostSchema>;
export type UpdatePostData = z.infer<typeof UpdatePostSchema>;
export type CreateTurmaData = z.infer<typeof CreateTurmaSchema>;
export type UpdateTurmaData = z.infer<typeof UpdateTurmaSchema>;
export type CreateDocenteData = z.infer<typeof CreateDocenteSchema>;
export type UpdateDocenteData = z.infer<typeof UpdateDocenteSchema>;
export type CreateAlunoData = z.infer<typeof CreateAlunoSchema>;
export type UpdateAlunoData = z.infer<typeof UpdateAlunoSchema>;
