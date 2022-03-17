import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = Number(process.env.PROJECT_PORT) || 3000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('MBC Studio')
      .setDescription('Сервис для автоматизации работы пиццерии')
      .setVersion('1.0.0')
      .addTag('Документация')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
