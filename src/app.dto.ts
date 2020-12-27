import { ApiProperty } from '@nestjs/swagger';

class ObjectDto {
  @ApiProperty()
  field: string;
}

export class HelloWorldDto {
  @ApiProperty({
    isArray: true,
    type: ObjectDto,
  })
  arrayOfObjectsDto: ObjectDto[];
}

export class Params {
  @ApiProperty({
    isArray: true,
    type: ObjectDto,
  })
  arrayOfObjectsDto: ObjectDto[];
}

export class HelloWorldDto2 {
  @ApiProperty()
  params: Params;
}
