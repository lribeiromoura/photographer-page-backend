import { IsString, MinLength } from 'class-validator';

export class CreateTagDto {
  @IsString()
  @MinLength(3)
  name: string;
  @IsString()
  @MinLength(3)
  description: string;
  @IsString()
  type: string;
}
