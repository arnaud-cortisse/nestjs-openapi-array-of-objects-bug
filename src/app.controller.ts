import { Controller, Get, Query } from '@nestjs/common';
import { HelloWorldDto, HelloWorldDto2 } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/Not Working')
  getHello(@Query() helloWorldDto: HelloWorldDto): string {
    return this.appService.getHello();
  }

  @Get('/Working')
  getHello2(@Query() helloWorldDto: HelloWorldDto2): string {
    return this.appService.getHello();
  }
}
