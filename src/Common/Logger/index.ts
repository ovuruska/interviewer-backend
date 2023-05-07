import { Injectable, LoggerService } from '@nestjs/common';

import * as winston from 'winston';

@Injectable()
export class WinstonLoggerService implements LoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.colorize({
          all: true,
        })
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.prettyPrint(),
            winston.format.align(),
            winston.format.printf(({ level, message, ...meta }) => `${meta?.['timestamp']} - ${level}: ${message}`)
          ),
        }),
      ],
    });
  }

  log(message: string, ...meta: unknown[]) {
    this.logger.info(message, ...meta);
  }

  error(message: string, ...meta: unknown[]) {
    this.logger.error(message, ...meta);
  }

  warn(message: string, ...meta: unknown[]) {
    this.logger.warn(message, ...meta);
  }

  debug(message: string, ...meta: unknown[]) {
    this.logger.debug(message, ...meta);
  }

  verbose(message: string, ...meta: unknown[]) {
    this.logger.verbose(message, ...meta);
  }
}
