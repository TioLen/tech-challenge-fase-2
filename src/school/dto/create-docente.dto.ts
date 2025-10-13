import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateDocenteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsString()
  @IsNotEmpty()
  materia: string;
}