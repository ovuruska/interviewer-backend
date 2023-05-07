import {validateSync} from "class-validator";
import {TaskDto} from "@common/Dto/task";
import {plainToClass} from "class-transformer";
import {TaskEnum} from "@common/index.enum";

describe('DTO - Task', () => {
  it('should have id, content and type', () => {
    const data = {
      id: '12345678901234567890',
      content: 'content',
      type: TaskEnum.GENERAL,
    };
    const dto = plainToClass(TaskDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toEqual(0);
  });
  it('should not validate without id', () => {
    const data = {
      content: 'content',
      type: TaskEnum.GENERAL,
    };
    const dto = plainToClass(TaskDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
  it('should not validate without content', () => {
    const data = {
      id: '12345678901234567890',
      type: TaskEnum.GENERAL,
    };
    const dto = plainToClass(TaskDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
  it('should not validate without type', () => {
    const data = {
      id: '12345678901234567890',
      content: 'content',
    };
    const dto = plainToClass(TaskDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
  it('should not validate empty object', () => {
    const data = {};
    const dto = plainToClass(TaskDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
});
