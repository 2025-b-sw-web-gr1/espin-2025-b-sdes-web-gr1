import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ example: 'Real Madrid', description: 'Nombre del equipo' })
  name!: string;

  @ApiProperty({
    example: 1902,
    description: 'Año de fundación',
    required: false,
  })
  founded?: number;
}
