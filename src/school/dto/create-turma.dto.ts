import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTurmaDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}