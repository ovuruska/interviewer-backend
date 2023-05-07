import {TaskEnum} from "@common/index.enum";
import {plainToClass} from "class-transformer";
import {CreateTaskDto} from "@app/Interview/dto/create-task.dto";
import {validateSync} from "class-validator";

describe('CreateTaskDto', function () {
  it('should take a task enum.', function () {
    const data = {
      type: TaskEnum.GENERAL
    };
    const dto = plainToClass(CreateTaskDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toEqual(0);
  });

  it('should not take a value other than TaskEnum.', function () {
    const data = {
      type: 'K'
    };
    const dto = plainToClass(CreateTaskDto, data);
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);

  });
});
