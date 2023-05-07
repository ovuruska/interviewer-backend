/*
import {ApiProperty} from "@nestjs/swagger";


export class CreateResultDto {
  @ApiProperty({
    type: String,
    description: 'The result of the interview',
    required: true,
    default: "I am a result.",
  })
  result: string;
}

 */

import {plainToClass} from "class-transformer";
import {validateSync} from "class-validator";
import {CreateResultDto} from "@app/Result/dto/create-result.dto";

describe('CreateResultDto', () => {
  it('should validate the CreateResultDto', () => {
    const data = {
      result: "I am a result.",
    };
    const result = plainToClass(CreateResultDto, data);
    const errors = validateSync(result);
    expect(result).toBeInstanceOf(CreateResultDto);
    expect(errors.length).toEqual(0);
  });
});
