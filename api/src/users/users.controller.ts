import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Post('create-user')
  createUser(@Body() createUserDto: Record<string, any>) {
    return this.usersService.createUser(<Prisma.UserCreateInput>createUserDto);
  }
}
