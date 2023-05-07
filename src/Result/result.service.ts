import {Injectable} from "@nestjs/common";
import {Model} from "mongoose";
import {Result} from "@common/Models/result.model";
import {InjectModel} from "@nestjs/mongoose";
import {ResultPromptService} from "@app/Result/helpers/result-prompt-service";
import {WinstonLoggerService} from "@common/Logger";


@Injectable()
export class ResultService {
  constructor(
    @InjectModel(Result.name) private readonly resultModel: Model<Result>,
    private readonly resultPromptService: ResultPromptService,
    private readonly logger: WinstonLoggerService,
  ) {

  }

  async evaluateGeneralTask(task: string, code: string): Promise<Result> {

    const response = await this.resultPromptService.evaluate(task, code);
    this.logger.log(response);
    const result = JSON.parse(response);
    return this.resultModel.create(result);
  }
}
