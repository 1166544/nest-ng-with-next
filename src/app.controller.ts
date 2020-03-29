import {
  CacheInterceptor,
  Controller,
  Get,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Index')
  public root(): any {
    return this.appService.root();
  }
}
