import { Controller, Get, HttpCode, Res, Req, Param, Ip, HostParam } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService){}

  @Get('findall')
  findAll(): object {
    console.log(this.authService.findAll())
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
