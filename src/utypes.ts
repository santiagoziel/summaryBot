import Discord from "discord.js"

export type CommandFunction = ( message: Discord.Message, args: string[]) => void;

export interface CommandCollection {[key: string]: CommandFunction}
