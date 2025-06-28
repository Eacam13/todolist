import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { UserSwagger } from '../docs/user.swagger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UserSwagger.create
  async create(@Body() data: UserDto) {
    return this.userService.create(data);
  }

  @Get()
  @UserSwagger.findAll
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UserSwagger.getById
  async getById(@Param('id') id: number) {
    return this.userService.getById(Number(id));
  }

  @Put(':id')
  @UserSwagger.update
  async update(@Param('id') id: number, @Body() data: UserDto) {
    return this.userService.update(Number(id), data);
  }

  @Delete(':id')
  @UserSwagger.delete
  async delete(@Param('id') id: number) {
    return this.userService.delete(Number(id));
  }
}
