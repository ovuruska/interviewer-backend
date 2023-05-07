import {Module} from "@nestjs/common";
import {ResultController} from "@app/Result/result.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {ResultPromptService} from "@app/Result/helpers/result-prompt-service";
import {OpenaiService} from "@common/Services/openai.service";
import {ResultService} from "@app/Result/result.service";
import {ResultSchema} from "@common/Models/result.model";
import {WinstonLoggerService} from "@common/Logger";


@Module({
  controllers: [ResultController],
  imports: [MongooseModule.forFeature([
    {name: "Result", schema: ResultSchema}
  ])],
  providers: [ResultPromptService, OpenaiService,ResultService,WinstonLoggerService],
  exports: [ResultPromptService]
})
export class ResultModule {

}
