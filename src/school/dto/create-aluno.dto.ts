import { IsString, IsNotEmpty, IsOptional, IsNumber, IsMongoId } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsMongoId()
  @IsNotEmpty()
  turma: string;
}