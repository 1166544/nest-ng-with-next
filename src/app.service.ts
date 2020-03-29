import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public root(): any {
    return {
      title: 'Test page',
      content: 'test content',
    };
  }
}
