import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  findAll(): any[] {
    return [];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener equipo por ID' })
  findOne(@Param('id') id: number): Record<string, unknown> {
    return { id };
  }

  @Post()
  @ApiOperation({ summary: 'Crear equipo' })
  create(@Body() body: CreateTeamDto): CreateTeamDto {
    return body;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar equipo' })
  update(
    @Param('id') id: number,
    @Body() body: UpdateTeamDto,
  ): Record<string, unknown> {
    return { id, ...body };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar equipo' })
  remove(@Param('id') id: number): Record<string, unknown> {
    return { id, deleted: true };
  }
}
