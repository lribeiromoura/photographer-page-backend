import { PartialType } from '@nestjs/swagger';
import { CreateMediatypeDto } from './create-mediatype.dto';

export class UpdateMediatypeDto extends PartialType(CreateMediatypeDto) {}
