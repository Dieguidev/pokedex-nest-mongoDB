import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      //whitelist elimina toda la data extra que no debe existir
      whitelist: true,
      // forbidNonWhitelisted manda un error si se envian datos extra
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
