import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
  Logger
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Equipment } from './entities/equipment.entity';
import { CreateEquipmentDto } from './dto/create-equipment.dto';

@Injectable()
export class EquipmentService {
  private readonly logger = new Logger('EquipmentService');

  constructor(
    @InjectRepository(Equipment)
    private readonly equipmentRepository: Repository<Equipment>,
  ) { }

  async create(createEquipmentDto: CreateEquipmentDto) {
    try {
      const equipment = this.equipmentRepository.create(createEquipmentDto);
      return await this.equipmentRepository.save(equipment);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    try {
      return await this.equipmentRepository.find();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Error al recuperar los equipos');
    }
  }


  async validateList(codigos: string[]) {
    try {
      const foundEquipments = await this.equipmentRepository.find({
        where: {
          codigo: In(codigos),
        },
        select: ['codigo'],
      });

      const foundCodes = foundEquipments.map((eq) => eq.codigo);
      const notFoundCodes = codigos.filter((code) => !foundCodes.includes(code));

      return {
        encontrados: foundCodes,
        no_encontrados: notFoundCodes,
      };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Error inesperado al validar los códigos');
    }
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(`El equipo con ese código ya existe`);
    }

    this.logger.error(error);
    throw new InternalServerErrorException('Error inesperado, revise los logs del servidor');
  }
}