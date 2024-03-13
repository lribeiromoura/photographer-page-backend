import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  healthCheck(): { status: string; message: string } {
    console.log('HealthCheck');
    return this.appService.healthCheck();
  }
}
