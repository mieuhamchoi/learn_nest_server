import { Controller, Get, HttpCode, Res, Req, Param, Ip, HostParam, UseGuards, SetMetadata, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../users/user/user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService, private userService: UserService){}

  @Get('guard2')
  @SetMetadata('roles', ['admin'])
  @UseGuards(AuthGuard)
  testGuard2() {
    // if can't active return badrequest
    return 'đã vào được'
  }
  
  @Get('guard')
  @UseInterceptors(LoggingInterceptor)
  //@UseGuards(AuthGuard)
  async testGuard() {
    // if can't active return badrequest
    let flag = 0;
    while(true) {
      await this.sleep(1000)
      console.log("1000")
      flag += 1000;
      if (flag >= 10000) {
        console.log('out')
        break
      }
    }
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  @Get('findall')
  findAll(): object {
    //console.log(this.authService.findAll())
    console.log("load thanh cong", this.userService.getUser())
    return {
        name: "phuoc",
        age: 20
    }
  }
  @Get('getuser/:id/:name')
  getUser(@Req() request: Request, @Param('id') id: string,  @Param('name') name: string, @Ip() ip, @HostParam() host) :string {
    console.log("đã vào 1", id, name)
    console.log("đã vào 2", request.params['id'], request.params['name'])
    console.log("tìm ip", ip)
    console.log("tìm host", host)
    return "Đã vào"
  }
}
