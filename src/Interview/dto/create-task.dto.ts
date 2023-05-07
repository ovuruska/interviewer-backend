import {ApiProperty} from "@nestjs/swagger";
import {TaskEnum} from "@common/index.enum";
import {IsEnum} from "class-validator";

export class CreateTaskDto {
  @ApiProperty({
    name:'type',
    enum:TaskEnum,

  })
  @IsEnum(TaskEnum)
  type:TaskEnum;

}
