import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsEnum } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @IsMongoId()
  @IsNotEmpty()
  autor: string;

  @IsOptional()
  @IsEnum(['rascunho', 'publicado'])
  status?: 'rascunho' | 'publicado';
}