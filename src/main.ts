import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const porta = process.env.PORT || 3000
  await app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
}
bootstrap();

