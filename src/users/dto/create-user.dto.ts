import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { User } from '../user.entity';

export class CreateUserDto  extends  User{
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsEmail()
  email: string;
}
