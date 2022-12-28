import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  
  //permitindo acesso geral para teste
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api');


  await app.listen(3000);
}
bootstrap();