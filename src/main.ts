import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('App School')
    .setDescription('the description of api for app schoool !')
    .setVersion('1.0')
    .addTag('school')
    .addSecurity('basic',{
      type: 'http',
      scheme: 'basic'
    })
    .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('apiDoc',app, document);

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
