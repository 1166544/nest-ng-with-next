import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import {
  Request,
  Response,
} from 'express';
import { NextService } from '../logics/next/next.service';

@Controller()
export class HomeController {
  constructor(
    private readonly next: NextService,
  ) {}

  @Get()
  public showHome(@Req() req: Request, @Res() res: Response) {
    return this.next.render('/index', req, res);
  }
}
