import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tag } from './tag.interface';
import { Model } from 'mongoose';

@Injectable()
export class TagsService {
  constructor(@InjectModel('Tag') private readonly tagModel: Model<Tag>) {}
  create(createTagDto: CreateTagDto) {
    return this.tagModel.create(createTagDto);
  }

  findAll() {
    return this.tagModel.find();
  }

  findOne(id: string) {
    return this.tagModel.findById(id);
  }

  update(id: string, updateTagDto: UpdateTagDto) {
    return this.tagModel.updateOne({ _id: id }, updateTagDto).exec();
  }

  remove(id: string) {
    return this.tagModel.deleteOne({
      _id: id,
    });
  }
}
