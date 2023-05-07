import {HealthController} from "./index.controller";
import {HealthCheckService} from "@nestjs/terminus";
import {mock} from "jest-mock-extended";

describe('HealthController', () => {
  let healthController: HealthController;
  let healthCheckService: HealthCheckService;

  beforeAll(async () => {
    healthCheckService = mock<HealthCheckService>();
    healthController = new HealthController(healthCheckService);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(healthController).toBeDefined();
  });
  it('should call health check', () => {

    const spy = jest.spyOn(healthCheckService, 'check');
    healthController.check();
    expect(spy).toBeCalled();

  });
});
