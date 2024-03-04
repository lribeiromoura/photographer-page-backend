import { Module } from '@nestjs/common';
import { MediasService } from './medias.service';
import { MediasController } from './medias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema } from './schemas/media.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Media',
        schema: MediaSchema,
      },
    ]),
  ],
  controllers: [MediasController],
  providers: [MediasService],
})
export class MediaModule {}
