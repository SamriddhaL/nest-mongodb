import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true
  }))

  const db = mongoose.connection;

  db.on('connected', () => console.log('MongoDB connected'));
  db.on('error', (err) => console.error('MongoDB connection error:', err));
  db.on('disconnected', () => console.warn('MongoDB disconnected'));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
