import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';
import {SwaggerProvider} from "@app/Configurations/Providers/swagger-provider";
import helmet from 'helmet';
import {WinstonLoggerService} from "@common/Logger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const logger : WinstonLoggerService = new WinstonLoggerService();
  const app = await NestFactory.create(AppModule,{logger});
  app.use(helmet())
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  SwaggerProvider(app)
  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
