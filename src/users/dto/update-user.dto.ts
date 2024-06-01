import { IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  username?: string;

  @IsOptional()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
