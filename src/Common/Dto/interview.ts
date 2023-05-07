import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {
  IsAlphanumeric,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString, Length,
  ValidateNested
} from "class-validator";
import {ResultDto} from "@common/Dto/result";

export class InterviewDto {

  @ApiProperty({
    name:'id',
    type:'string',
    description:'id of the interview',
    required:true,
  })
  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(20,20)
  id: string;


  @ApiProperty({
    name:'email',
    type:'string',
    description:'email of the candidate',
    required:true,
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiPropertyOptional({
    name:'isCompleted',
    type:'boolean',
    description:'is interview completed',
    required:true,
    default:false,
  })
  @IsBoolean()
  isCompleted: boolean = false;

  @ApiPropertyOptional({
    name:'steps',
    type:ResultDto,
    default:[],
    description:'steps of the interview',
  })
  @IsOptional()
  @ValidateNested({each:true})
  steps: ResultDto[] = [];
}
