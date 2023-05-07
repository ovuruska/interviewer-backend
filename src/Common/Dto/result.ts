import {ApiProperty} from "@nestjs/swagger";
import {IsAlphanumeric, IsNotEmpty, IsString, Length} from "class-validator";


export class ResultDto {
  @ApiProperty({
    name: 'id',
    description: 'id',
    type: 'string',
    required: true,
    example:"DnL72UZVWFhzduCLVbEh"
  })
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(20, 20)
  id:string

  @ApiProperty({
    description: 'content',
    type: 'string',
    required: true,
    name:'content',
    example:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  })
  @IsNotEmpty()
  @IsString()
  content:string

  @ApiProperty({
    description: 'string',
    name:'interviewId',
    type: 'string',
    required: true,
    example:"DnL72UZVWFhzduCLVbEh"
  })
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(20, 20)
  interviewId:string

  @ApiProperty({
    name:'taskId',
    description: 'taskId',
    type: 'string',
    required: true,
    example:"DnL72UZVWFhzduCLVbEh"
  })
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(20, 20)
  taskId:string

}
