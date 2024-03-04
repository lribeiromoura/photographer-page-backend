import { IsString } from 'class-validator';

export class User {
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
