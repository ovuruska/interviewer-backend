import {Injectable} from "@nestjs/common";
import generalPrompt from "@app/Result/helpers/general.prompt";
import {OpenaiService} from "@common/Services/openai.service";
import generalSubmitPrompt from "@app/Result/helpers/general-submit.prompt";
import {ChatCompletionRequestMessage} from "openai";

@Injectable()
export class ResultPromptService {
  constructor(private readonly openaiService: OpenaiService) {
  }

  async evaluate(task: string, code: string): Promise<string> {
    const messages = [{
      role: "system", content: generalPrompt
    }, {
      role: "user", content: generalSubmitPrompt(task, code)
    }] as ChatCompletionRequestMessage[];
    return this.openaiService.getCompletion(messages);
  }
}
