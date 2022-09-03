import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageInterface } from './db/image.interface';
import { InjectModel } from '@nestjs/mongoose';
import { imageModelName } from './db/image.model-name';
import { Model } from 'mongoose';

@Injectable()
export class ImageService {
  constructor(@InjectModel(imageModelName) private model:Model<ImageInterface>) {
  }

  create(createImageDto: { img_url: string; name: string }) {
    const result = this.model.create(createImageDto);
    return result;
  }

  findAll() {
    return this.model.find({});
  }
  async countAll() {
    const count = await this.model.find({}).count();
    return "<b>Count </b>" +  count;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
