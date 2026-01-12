import { IsArray, IsString, ArrayNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ValidateEquipmentDto {
  @ApiProperty({ 
    example: ['EQ-2024-001', 'EQ-999'], 
    description: 'Lista de códigos a validar',
    type: [String] 
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  codigos: string[];
}