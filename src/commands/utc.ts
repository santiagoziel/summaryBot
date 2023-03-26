import {Message} from "discord.js"

/**
 * Returns the current time in UTC format to the user
 * @param message 
 * @param args 
 */
export const UTC = (message: Message, args: string[]) => {
  // Get the current time in UTC format
  const currentTimeUTC = new Date().toISOString().slice(11, 16); // Extract only the time portion of the ISO string

  // Send the current time in UTC format as a reply
  message.reply(`The current time in UTC is ${currentTimeUTC}`);
};