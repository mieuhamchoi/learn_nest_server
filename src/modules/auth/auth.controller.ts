import { Controller, Get, HttpCode, Res, Req, Param, Ip, HostParam } from '@nestjs/common';
import { Request } from 'express';
@Controller('auth')
export class AuthController {
  @Get('findall')
  findAll(): object {
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
//   @HttpCode(204)
//   findAll(@Res() response): string {
    
//     response.status(200).json({
//         name: "Phuoc",
//         age: 20
//     })

//     return 'This action returns all cats';
//   }