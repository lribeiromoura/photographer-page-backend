import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Req,
} from '@nestjs/common';
import { MediasService } from './medias.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';

@Controller('medias')
export class MediasController {
  constructor(private readonly mediasService: MediasService) {}

  @Post()
  create(@Body() createMediaDto: CreateMediaDto) {
    return this.mediasService.create(createMediaDto);
  }

  @Get('')
  findMediaBySearch(@Req() req) {
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const isPublished = req.query.isPublished || 'all';
    const searchString = req.query.searchString || '';
    const tags = req.query.tags || 'all';
    const type = req.query.type || 'all';

    return this.mediasService.findBySearch(
      limit,
      page,
      isPublished,
      searchString,
      tags,
      type,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotoDto: UpdateMediaDto) {
    return this.mediasService.update(id, updatePhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediasService.remove(id);
  }
}
