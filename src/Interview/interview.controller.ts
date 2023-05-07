import {Body, Controller, Param, Post} from "@nestjs/common";
import {InterviewService} from "@app/Interview/interview.service";
import {ApiOkResponse, ApiOperation} from "@nestjs/swagger";
import {TaskDto} from "@common/Dto/task";
import {CreateTaskDto} from "@app/Interview/dto/create-task.dto";
import {CreateInterviewDto} from "@app/Interview/dto/create-interview.dto";
import {InterviewDto} from "@common/Dto/interview";
import {FirebaseIdDto} from "@common/Dto/firebase-id";


@Controller('interview')
export class InterviewController{
  constructor(
    private readonly interviewService: InterviewService,
  ) {

  }

  @Post('')
  @ApiOperation({summary: 'Create a new interview'})
  @ApiOkResponse({
    type:InterviewDto
  })
  async createInterview(@Body() {email}:CreateInterviewDto) {
    return this.interviewService.createInterview(email)
  }

  @Post(':id')
  @ApiOperation({summary: 'Get the interview with the given id'})
  @ApiOkResponse({
    type:TaskDto
  })
  async addStep(@Body() {type}: CreateTaskDto,@Param() {id} : FirebaseIdDto ) : Promise<TaskDto> {
    return this.interviewService.addStep(id,type);
  }
}
