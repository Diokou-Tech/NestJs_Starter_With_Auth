import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, Res, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { customStorage} from '../common/helpers/helpers';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('school')
@ApiSecurity('basic')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('fileImage', {storage : customStorage('images') })
  )
  async create(@UploadedFile(new ParseFilePipe({
    validators: []
  })) file:Express.Multer.File ,@Body() createImageDto: CreateImageDto,@Res() res)
  {
    const data = { img_url: file.path, name: createImageDto.name };
    // validations files
    const result = await this.imageService.create(data);
    res.send(result);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }
  
  @Get("count")
  countAll() {
    return this.imageService.countAll();
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
