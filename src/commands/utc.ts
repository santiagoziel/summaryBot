import {Message} from "discord.js"

export const UTC = (message: Message, args: string[]) => {
  const currentTimeUTC = new Date().toISOString().slice(11, 16); // Extract only the time portion of the ISO string
  message.reply(`The current time in UTC is ${currentTimeUTC}`);
};