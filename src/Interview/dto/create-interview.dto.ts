import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";


export class CreateInterviewDto {
  @ApiProperty({
    name:'email',
    type:'string',
    description:'email of the candidate',
    required:true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
