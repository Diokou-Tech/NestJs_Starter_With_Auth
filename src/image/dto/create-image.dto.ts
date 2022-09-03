import { ApiProperty } from '@nestjs/swagger';

export class CreateImageDto {
  @ApiProperty({required: true})
  name:string;
}
