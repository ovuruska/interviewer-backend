  import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SwaggerProvider(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Quicker Interviewer API')
    .setDescription('Quicker Auto Interviewer API description')
    .setVersion('0.0.1')
    .addTag('result')
    .addTag('interview')
    .addTag('health')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
