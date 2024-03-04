import { IsBoolean, IsString, IsUrl, MinLength } from 'class-validator';

export class CreateMediaDto {
  @IsString()
  @MinLength(3)
  name: string;
  @IsString()
  @MinLength(3)
  description: string;
  @IsString()
  @MinLength(3)
  filename: string;
  @IsUrl()
  url: string;
  @IsBoolean()
  isPublished: boolean;
  @IsString()
  tags: string;
  @IsString()
  type: string;
}
