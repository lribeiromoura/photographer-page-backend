import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MediatypesService } from './mediatypes.service';
import { CreateMediatypeDto } from './dto/create-mediatype.dto';
import { UpdateMediatypeDto } from './dto/update-mediatype.dto';

@Controller('mediatypes')
export class MediatypesController {
  constructor(private readonly mediatypesService: MediatypesService) {}

  @Post()
  create(@Body() createMediatypeDto: CreateMediatypeDto) {
    return this.mediatypesService.create(createMediatypeDto);
  }

  @Get()
  findAll() {
    return this.mediatypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediatypesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMediatypeDto: UpdateMediatypeDto,
  ) {
    return this.mediatypesService.update(id, updateMediatypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediatypesService.remove(id);
  }
}
