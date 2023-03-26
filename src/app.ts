import Discord from "discord.js"
import { CommandHandler } from "./bot";
import { botConfig } from "./config";

const prefix = "!";

/**
 * processes incoming Discord messages, checks for valid bot commands,
 * and delegates command execution to the CommandHandler class
 * @param message  
 */
export const handleCommand = (message: Discord.Message) => {
  // Ignore messages from bots and without the command prefix
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  // Initialize CommandHandler and process the message
  const bot = new CommandHandler(botConfig);
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift()?.toLowerCase() ?? "";

  // Execute the corresponding command function, if available
  const commandFunction = bot.commands[command];
  if (commandFunction) {
    commandFunction(message, args);
  } else {
    console.log("Command not found:", command);
  }
}





