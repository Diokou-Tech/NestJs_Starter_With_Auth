import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('fileImage',{
    storage: diskStorage(
      {
      destination: __dirname +'/src/__storage/images',
      filename: (req,file,callback) => {
      const randomName = "image-" + new Date().getMilliseconds();
      callback(null,randomName+''+ extname(file.originalname))
        }
      }
    )
  }))
  async create(@UploadedFile() file:Express.Multer.File ,@Body() createImageDto: CreateImageDto,@Res() res)
  {
    const data = { img_url: file.path, name: createImageDto.name };
    const result = await this.imageService.create(data);
    res.send(result);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
