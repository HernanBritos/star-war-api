import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../users/roles.decorator';
import { UserRole } from '../users/roles.enum';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.moviesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @Post()
  create(@Body() movie: Movie) {
    return this.moviesService.create(movie);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @Put(':id')
  update(@Param('id') id: number, @Body() movie: Movie) {
    return this.moviesService.update(id, movie);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.remove(id);
  }
}
