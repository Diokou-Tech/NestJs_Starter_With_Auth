import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { imageModelName } from './db/image.model-name';
import { imageSchema } from './db/image.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name: imageModelName, schema: imageSchema}])
  ],
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {}
