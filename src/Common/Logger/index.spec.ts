import { WinstonLoggerService } from './index';

describe('WinstonLoggerService', () => {
  let winstonLoggerService: WinstonLoggerService;

  beforeEach(() => {
    winstonLoggerService = new WinstonLoggerService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(winstonLoggerService).toBeDefined();
  });

  it('should log messages', () => {
    const loggerSpy = jest.spyOn(winstonLoggerService, 'log');

    const message = 'Test log message';
    winstonLoggerService.log(message);

    expect(loggerSpy).toHaveBeenCalledWith(message);
  });

  it('should log errors', () => {
    const loggerSpy = jest.spyOn(winstonLoggerService, 'error');

    const message = 'Test error message';
    winstonLoggerService.error(message);

    expect(loggerSpy).toHaveBeenCalledWith(message);
  });

  it('should log warnings', () => {
    const loggerSpy = jest.spyOn(winstonLoggerService, 'warn');

    const message = 'Test warning message';
    winstonLoggerService.warn(message);

    expect(loggerSpy).toHaveBeenCalledWith(message);
  });

  it('should log debug messages', () => {
    const loggerSpy = jest.spyOn(winstonLoggerService, 'debug');

    const message = 'Test debug message';
    winstonLoggerService.debug(message);

    expect(loggerSpy).toHaveBeenCalledWith(message);
  });

  it('should log verbose messages', () => {
    const loggerSpy = jest.spyOn(winstonLoggerService, 'verbose');

    const message = 'Test verbose message';
    winstonLoggerService.verbose(message);

    expect(loggerSpy).toHaveBeenCalledWith(message);
  });
});
