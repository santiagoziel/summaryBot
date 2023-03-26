import { CommandCollection, CommandFunction } from "./utypes";
import * as comandsDSL from "./commands"
import { Configuration, OpenAIApi } from "openai";

export type modelConfiguration = { gen: "3", version: "text-davinci-003" | "text-curie-001" | "text-babbage-001" | "text-ada-001" } | 
  { gen: "3.5", version: "gpt-3.5-turbo"}


export type botConfiguration = {
  OPENAI_API_KEY: string,
  OPENAI_MAXTOKENS_PER_MESSAGE: number,
  summaryModel: modelConfiguration,
  chatModel: modelConfiguration
}

export class CommandHandler {
  
  readonly commands: CommandCollection;
  private readonly openai: OpenAIApi
  private readonly config: botConfiguration

  constructor(config: botConfiguration) {
    this.config = config
    this.commands = {
      utc: this.UTC,
      messagessince: this.messagesSince,
      gpt: this.GPT
    };
    const AIconfiguration = new Configuration({apiKey: this.config.OPENAI_API_KEY,})
    this.openai = new OpenAIApi(AIconfiguration);
  }

  private UTC: CommandFunction = (message, args) => {
    comandsDSL.UTC(message,args)
  };
  
  private messagesSince: CommandFunction = async (message, args) => {
   comandsDSL.messagesSince(message, args, this.openai, this.config.OPENAI_MAXTOKENS_PER_MESSAGE, this.config.summaryModel)
  };

  private GPT: CommandFunction = async (message, args) => {
    comandsDSL.GPT(message, args, this.openai, this.config.OPENAI_MAXTOKENS_PER_MESSAGE, this.config.chatModel)
  }

}
