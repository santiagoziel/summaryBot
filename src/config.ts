import {env_config} from "@santiagoziel/service-utils" //https://github.com/santiagoziel/service-utils
import { botConfiguration } from "./bot"
const config = new env_config()

export const discordConfig = {
    "BOT_TOKEN": config.stringOrError("BOT_TOKEN")
}

export const botConfig: botConfiguration = {
    "OPENAI_API_KEY": config.stringOrError("OPENAI_API_KEY"),
    "OPENAI_MAXTOKENS_PER_MESSAGE": 300,
    summaryModel: {gen: "3.5", version: "gpt-3.5-turbo"},
    chatModel: {gen: "3", version: "text-curie-001"}
}