import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('search')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-search')
  getHello(): string {
    return this.appService.getHello();
  }
}
