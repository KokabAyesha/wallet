import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//bootstarp is function we can replace witha ny anme
async function bootstrap() {
  const app = await NestFactory.create(AppModule); //app module ismian module
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000); //app port calling and running in 3000 line
}
bootstrap(); // function calling        
