import {Injectable} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {ChatCompletionRequestMessage, Configuration, OpenAIApi} from "openai";

@Injectable()
export class OpenaiService {
  private readonly configuration: Configuration;
  private readonly openaiClient: OpenAIApi;
  constructor(){
    this.configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openaiClient = new OpenAIApi(this.configuration);

  }
  async getCompletion(messages:ChatCompletionRequestMessage[],model:string = "gpt-4",temperature:number = 1,maxTries : number = 5) : Promise<string>{
    try {
      const completion = await this.openaiClient.createChatCompletion(
        {
          model,
          messages
        });
      return completion.data.choices[0].message.content;

    } catch (e) {
      if (maxTries > 0) {
        return this.getCompletion(messages, model, temperature, maxTries - 1);
      } else {
        throw e;
      }
    }
  }
}
