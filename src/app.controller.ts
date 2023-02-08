import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    //console.log("controller app",this.authService.findAll())
    return this.appService.getHello();
  }
}
