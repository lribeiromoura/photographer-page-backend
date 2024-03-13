import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/public.decorator';
import { Cron } from '@nestjs/schedule';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Cron('*/14 * * * *')
  @Public()
  @Get()
  healthCheck(): { status: string; message: string } {
    console.log('HealthCheck');
    return this.appService.healthCheck();
  }
}
