import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/public.decorator';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  @Public()
  @Get()
  healthCheck(): { status: string; message: string } {
    console.log('HealthCheck');
    return this.appService.healthCheck();
  }
}
