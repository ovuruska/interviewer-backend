import {plainToClass} from "class-transformer";
import {CreateInterviewDto} from "@app/Interview/dto/create-interview.dto";
import {validateSync} from "class-validator";

describe('DTO - CreateInterview', function () {
  it('should contain email property', () => {
    const data = {
      email: 'a@a.com'
    };
    const dto = plainToClass(CreateInterviewDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toEqual(0);
  });
  it('should contain valid email property', () => {
    const data = {
      email: 'random string'
    };
    const dto = plainToClass(CreateInterviewDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
  it('should not validate if email is empty', () => {
    const data = {
      email: ''
    };
    const dto = plainToClass(CreateInterviewDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
  it('should not validate if email is not present', () => {
    const data = {};
    const dto = plainToClass(CreateInterviewDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
});
