import {ApiProperty} from "@nestjs/swagger";
import {IsAlphanumeric, IsEnum, IsNotEmpty, Length} from "class-validator";
import {TaskEnum} from "@common/index.enum";

export class TaskDto {
  @ApiProperty({
    name: 'id', type: 'string', description: 'unique identifier', required: true,
  }) @IsNotEmpty() @IsAlphanumeric() @Length(20, 20) id: string;


  @ApiProperty({
    name: 'content', type: 'string', description: 'content of the task', required: true,
  }) @IsNotEmpty() content: string;

  @ApiProperty({
    name: 'type', enum:TaskEnum, description: 'type of the task', required: true,
  }) @IsEnum(TaskEnum) @IsNotEmpty() type: TaskEnum;
}
