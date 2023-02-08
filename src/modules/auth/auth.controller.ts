import { Controller, Get, HttpCode, Res, Req, Param, Ip, HostParam, BadRequestException, ForbiddenException, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../users/user/user.service';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService, private userService: UserService){}

  @Get('findall')
  findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // throw new ForbiddenException();
    // throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
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
