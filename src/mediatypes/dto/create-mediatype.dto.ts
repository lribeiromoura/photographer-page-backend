import { IsString, MinLength } from 'class-validator';

export class CreateMediatypeDto {
  @IsString()
  @MinLength(3)
  name: string;
}
