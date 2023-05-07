import {validateSync} from "class-validator";
import {plainToClass} from "class-transformer";
import {EvaluateGeneralTaskDto} from "@app/Result/dto/evaluate-general-task.dto";

describe('EvaluateGeneralTaskDto', () => {
  it('should validate the EvaluateGeneralTaskDto', () => {
    const data = {
      code: "export default",
      task: "Task",
    };
    const result = plainToClass(EvaluateGeneralTaskDto, data);
    const errors = validateSync(result);
    expect(result).toBeInstanceOf(EvaluateGeneralTaskDto);
    expect(errors.length).toEqual(0);
  });
  it('should not validate the EvaluateGeneralTaskDto if field is missing', () => {
    const data = {
      code: "export default",
    };
    const result = plainToClass(EvaluateGeneralTaskDto, data);
    const errors = validateSync(result);
    expect(result).toBeInstanceOf(EvaluateGeneralTaskDto);
    expect(errors.length).toEqual(1);
  });
});
