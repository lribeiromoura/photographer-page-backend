import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { Media } from './media.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateMediaDto } from './dto/update-media.dto';

@Injectable()
export class MediasService {
  constructor(
    @InjectModel('Media') private readonly mediaModel: Model<Media>,
  ) {}

  create(createMediaDto: CreateMediaDto) {
    return this.mediaModel.create(createMediaDto);
  }

  async findBySearch(
    limit: number,
    page: number,
    isPublished: string,
    searchString: string,
    tags: string,
    type: string,
  ) {
    const data = await this.mediaModel.aggregate([
      {
        $facet: {
          count: [
            {
              $match: {
                $or: [
                  {
                    name: {
                      $regex: searchString,
                      $options: 'i',
                    },
                  },
                  {
                    description: {
                      $regex: searchString,
                      $options: 'i',
                    },
                  },
                  {
                    filename: {
                      $regex: searchString,
                      $options: 'i',
                    },
                  },
                ],
                tags: tags === 'all' ? { $exists: true } : tags,
                type: type === 'all' ? { $exists: true } : type,
                isPublished:
                  isPublished === 'all'
                    ? { $exists: true }
                    : isPublished === 'true'
                      ? true
                      : false,
              },
            },
            {
              $count: 'total',
            },
          ],
          data: [
            {
              $match: {
                $or: [
                  {
                    name: {
                      $regex: searchString,
                      $options: 'i',
                    },
                  },
                  {
                    description: {
                      $regex: searchString,
                      $options: 'i',
                    },
                  },
                  {
                    filename: {
                      $regex: searchString,
                      $options: 'i',
                    },
                  },
                ],
                type: type === 'all' ? { $exists: true } : type,
                tags: tags === 'all' ? { $exists: true } : tags,
                isPublished:
                  isPublished === 'all'
                    ? { $exists: true }
                    : isPublished === 'true'
                      ? true
                      : false,
              },
            },
            {
              $skip: limit * (page - 1),
            },
            {
              $limit: limit,
            },
            {
              $sort: {
                createdAt: -1,
              },
            },
          ],
        },
      },
    ]);
    return {
      total: data[0].count[0] ? data[0].count[0].total : 0,
      data: data[0].data,
    };
  }

  findOne(id: string) {
    return this.mediaModel.findById(id).exec();
  }

  async update(id: string, updateMediaDto: UpdateMediaDto) {
    const update = await this.mediaModel
      .updateOne(
        {
          _id: id,
        },
        {
          $set: {
            name: updateMediaDto.name,
            description: updateMediaDto.description,
            filename: updateMediaDto.filename,
            url: updateMediaDto.url,
            isPublished: updateMediaDto.isPublished,
            tags: updateMediaDto.tags,
            updatedAt: new Date(),
          },
        },
      )
      .exec();
    return update;
  }

  remove(id: string) {
    return this.mediaModel.deleteOne({
      _id: id,
    });
  }
}
