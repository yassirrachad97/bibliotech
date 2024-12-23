import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {

  
  id?: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;  

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
