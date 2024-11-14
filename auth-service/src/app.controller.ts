import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get-auth')
  getHello(): string {
    return this.appService.getHello();
  }
}
