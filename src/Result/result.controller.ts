import {Body, Controller, Post} from "@nestjs/common";
import {ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {ResultService} from "@app/Result/result.service";

@ApiTags('Result')
@Controller('result')
export class ResultController{
  constructor(
    private readonly resultService: ResultService,
    ) {

  }
  @ApiOperation({summary: 'Upsert the result with the given Interview id'})
  @Post('general')
  @ApiCreatedResponse({description: 'The result has been successfully upserted.'})
  async upsertGeneralResult(@Body() body: any) {
    return this.resultService.evaluateGeneralTask("","")
  }

}
