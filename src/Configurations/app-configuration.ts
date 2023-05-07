import {PORT_DEFAULT,MONGODB_URL_DEFAULT} from "@common/index.constants";
import serviceAccount from "@common/Services/service-account.json"

export interface IAppConfiguration {
  PORT: number;
  MONGODB_URL: string;
  OPENAI_API_KEY: string;
}


export const AppConfiguration = (): IAppConfiguration => ({
  PORT: parseInt(process.env.PORT, 10) || PORT_DEFAULT,
  MONGODB_URL: process.env.MONGODB_URL || MONGODB_URL_DEFAULT,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
});
