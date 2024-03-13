import { Injectable } from '@nestjs/common';
import { CreateMediatypeDto } from './dto/create-mediatype.dto';
import { UpdateMediatypeDto } from './dto/update-mediatype.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Mediatype } from './mediatype.interface';
import { Model } from 'mongoose';

@Injectable()
export class MediatypesService {
  constructor(
    @InjectModel('Mediatype')
    private readonly mediatypeModel: Model<Mediatype>,
  ) {}
  create(createMediatypeDto: CreateMediatypeDto) {
    return this.mediatypeModel.create(createMediatypeDto);
  }

  findAll() {
    return this.mediatypeModel.find();
  }

  findOne(id: string) {
    return this.mediatypeModel.findById(id);
  }

  update(id: string, updateMediatypeDto: UpdateMediatypeDto) {
    return this.mediatypeModel.updateOne({ _id: id }, updateMediatypeDto);
  }

  remove(id: string) {
    return this.mediatypeModel.deleteOne({
      _id: id,
    });
  }
}
