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
