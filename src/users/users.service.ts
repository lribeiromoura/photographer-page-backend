import { Model } from 'mongoose';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (user) {
      throw new UnauthorizedException('User already exists');
    }
    const hashedPassword = bcrypt.hashSync(createUserDto.password, 10);

    const createUsed = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });

    return createUsed.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(email: string) {
    return this.userModel
      .find({
        email: email,
      })
      .exec();
  }

  update(email: string, updateUserDto: UpdateUserDto) {
    const hashedPassword = bcrypt.hashSync(updateUserDto.password, 10);

    return this.userModel
      .updateOne(
        {
          email: email,
        },
        {
          $set: {
            ...updateUserDto,
            password: hashedPassword,
          },
        },
      )
      .exec();
  }

  remove(email: string) {
    return this.userModel.deleteOne({
      email: email,
    });
  }
}
