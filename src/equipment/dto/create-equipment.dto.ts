import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEquipmentDto {
  @ApiProperty({ example: 'EQ-2024-001', description: 'Código único del equipo' })
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @ApiProperty({ example: 'Laptop', description: 'Tipo de equipo' })
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @ApiProperty({ example: 'TechSolutions SAC', description: 'Cliente asignado' })
  @IsString()
  @IsNotEmpty()
  cliente: string;

  @ApiProperty({ example: 'Alquilado', description: 'Estado actual' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ example: '2025-10-20', required: false })
  @IsOptional()
  fechaEntrega?: string;
}