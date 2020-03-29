import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import RenderService from '@server/render/render.service';

@Injectable()
class RenderMiddleware implements NestMiddleware {
  private readonly renderService: RenderService;

  public constructor(renderService: RenderService) {
    this.renderService = renderService;
  }

  /**
   * Set the current req and res in our render service
   * @param args
   */
  public resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      this.renderService.next(req, res);
      if (next) {
        next();
      }
    };
  }
}

export default RenderMiddleware;
