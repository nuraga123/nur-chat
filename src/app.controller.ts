import { Controller, Get, Redirect, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Redirect('/chat', 301)
  redirectToChat() {}

  @Get('/chat')
  @Render('index')
  Home(): string {
    return;
  }

  @Get('/api/chat')
  async getMessages(@Res() res) {
    const messages = await this.appService.getMessages();
    res.json(messages);
  }
}
