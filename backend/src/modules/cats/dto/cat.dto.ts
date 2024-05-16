import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class CatDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly age: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly breed: string;

  readonly gender: string;
}
