import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3000', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true, // Carga automática de entidades
      synchronize: process.env.SYNCRONIZE_DB === 'true',      // ¡SOLO PARA DEV! Crea las tablas automáticamente
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
