import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('equipo')
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  codigo: string;

  @Column()
  tipo: string;

  @Column()
  cliente: string;

  @Column()
  estado: string;

  @Column({ name: 'fecha_entrega', type: 'date', nullable: true })
  fechaEntrega: string;
}