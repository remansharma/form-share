import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/admin/login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @UseGuards(DoesUserExist)
  @Post('/admin/signup')
  async signUp(@Body() user: any) {
    return await this.authService.create(user);
  }
}
