import Discord from "discord.js"
import { handleCommand } from "./app";
import { discordConfig } from "./config"

const client = new Discord.Client({intents: ["Guilds", "GuildMessages", "MessageContent"]});

client.on("messageCreate", handleCommand);

client.login(discordConfig.BOT_TOKEN);
