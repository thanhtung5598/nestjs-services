import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-posts')
  getHello(): string {
    return this.appService.getHello();
  }
}
