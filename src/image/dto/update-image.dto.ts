import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateImageDto } from './create-image.dto';

export class UpdateImageDto extends PartialType(CreateImageDto) {
    @ApiProperty({
        description: "id of image"
    })
    id:string;
    @ApiProperty({
        description: 'nom of picture !'
    })
    name:string;
}
