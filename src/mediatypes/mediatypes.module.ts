import { Module } from '@nestjs/common';
import { MediatypesService } from './mediatypes.service';
import { MediatypesController } from './mediatypes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MediatypeSchema } from './schemas/mediatype.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Mediatype',
        schema: MediatypeSchema,
      },
    ]),
  ],
  controllers: [MediatypesController],
  providers: [MediatypesService],
})
export class MediatypesModule {}
