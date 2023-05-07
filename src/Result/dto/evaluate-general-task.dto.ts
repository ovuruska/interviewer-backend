import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class EvaluateGeneralTaskDto {
  @ApiProperty({
    type: String,
    description: 'Code to be evaluated',
    required: true,
    default: "export default",

  })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({
    type: String,
    description: 'Task to be evaluated',
    required: true,
    default: "Task",
  })
  @IsString()
  @IsNotEmpty()
  task: string;
}
