import {plainToClass} from "class-transformer";
import {InterviewDto} from "@common/Dto/interview";
import {validateSync} from "class-validator";
import {TaskEnum} from "@common/index.enum";

describe('DTO - Interview', () => {
  it('should be defined without steps', () => {
    const interview = {
      id:'12345678901234567890',
      email: 'a@a.com', isCompleted: false,
    };
    const dto = plainToClass(InterviewDto, interview);
    const errors = validateSync(dto);
    expect(errors.length).toEqual(0);

  });
  it('should be defined with empty steps', () => {
    const interview = {
      id:'12345678901234567890',

      email: 'a@a.com', isCompleted: false, steps: [],
    };
    const dto = plainToClass(InterviewDto, interview);
    const errors = validateSync(dto);
    expect(errors.length).toEqual(0);
  });
  it('should be defined with steps', () => {
    const interview = {
      id:'12345678901234567890',

      email: 'a@a.com', isCompleted: false, steps: [{
        id: '12345678901234567890', content: 'content', type: TaskEnum.GENERAL,

      }],
    };
    const dto = plainToClass(InterviewDto, interview);
    const errors = validateSync(dto);
    expect(errors.length).toEqual(0);

  });
  it('should not validate without email', () => {
    const interview = {
      id:'12345678901234567890',

      isCompleted: false,
    };
    const dto = plainToClass(InterviewDto, interview);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
  it('should validate without isCompleted', () => {
    const interview = {
      id:'12345678901234567890',

      email: 'a@a.com',
    };
    const dto = plainToClass(InterviewDto, interview);
    const errors = validateSync(dto);
    expect(errors.length).toEqual(0);
    expect(dto.isCompleted).toEqual(false);
  });
  it('should not validate with invalid email', () => {
    const interview = {
      id:'12345678901234567890',

      email: 'a',
    };
    const dto = plainToClass(InterviewDto, interview);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });


});
