import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {

  const logger = new Logger('bootstrap');
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger: ['debug', 'error'] });

  app.enableCors({ origin: '*' });
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))
  .setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Leasein Equipment API')
    .setDescription('API para la gestión y validación de equipos tecnológicos')
    .setVersion('1.0')
    .build();

  const documentObj = SwaggerModule.createDocument(app, config);
  
  // La ruta será /api/docs
  SwaggerModule.setup('api/docs', app, documentObj);

  await app.listen(process.env.PORT ?? 3000,
    async () =>logger.debug(`equipment-manager-api ${await app.getUrl()}/api/docs`)
    );
}
bootstrap();