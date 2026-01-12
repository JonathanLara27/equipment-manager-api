import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { ValidateEquipmentDto } from './dto/validate-equipment.dto';

@ApiTags('Equipos')
@Controller('equipos')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo equipo' })
  @ApiResponse({ status: 201, description: 'Equipo creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos o código duplicado.' })
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los equipos' })
  findAll() {
    return this.equipmentService.findAll();
  }

  @Post('validar-equipos')
  @ApiOperation({ summary: 'Validar existencia de una lista de códigos' })
  @ApiResponse({ status: 200, description: 'Devuelve códigos encontrados y no encontrados.' })
  validate(@Body() validateDto: ValidateEquipmentDto) {
    return this.equipmentService.validateList(validateDto.codigos);
  }
}