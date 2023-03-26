import {Message} from "discord.js"
import { OpenAIApi } from "openai";
import axios from 'axios';
import { modelConfiguration } from "../bot";

/**
 * Fetches messages from a channel since a given time and summarizes the conversation using GPT-3 or GPT-3.5 models
 * @param message 
 * @param args 
 * @param openai 
 * @param max_tokens 
 * @param model 
 */
export const messagesSince = async (message: Message, args: string[], openai: OpenAIApi, max_tokens: number, model: modelConfiguration) => {
  // Parse and validate input time
  const inputTime = args[0];
  if (!inputTime) {
    message.reply('Please provide a time in the format "HH:mm"');
    return;
  }

  const [hours, minutes] = inputTime.split(':').map(Number);
  if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    message.reply('Invalid time format. Please provide a time in the format "HH:mm"');
    return;
  }

  const now = new Date();
  let utcDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), hours, minutes, 0));

  // Adjust provided time if it's in the future
  if (utcDate > now) {
    utcDate.setUTCDate(utcDate.getUTCDate() - 1);
  }

  // Fetch messages and format them for the GPT prompt
  const fetchedMessages = await message.channel.messages.fetch({ limit: 100 });
  const fetchedMessagesArray = [...fetchedMessages.values()].reverse();
  const prompt = "Please summarize the following conversation while retaining its meaning and indicating who said what. The conversation is presented in the format [author: message][author2: response]: ";
  let fullConv = prompt;

  for (const msg of fetchedMessagesArray.slice(0, -1)) {
    if (msg.createdTimestamp >= utcDate.getTime()) {
      fullConv += `[${msg.author.username}: ${msg.content}]`;
    }
  }

  // Generate GPT reply based on model generation
  let reply: string | undefined;
  if (model.gen === "3.5") {
    const completition = await openai.createChatCompletion({
      model: model.version,
      messages: [{ role: 'user', content: fullConv }],
      temperature: 0.2,
      max_tokens
    });
    reply = completition.data.choices[0].message?.content ?? '';
  } else if (model.gen === "3") {
    const completion = await openai.createCompletion({
      model: model.version,
      prompt: fullConv,
      temperature: 0.2,
      max_tokens
    });
    reply = completion.data.choices[0].text;
  } else {
    console.log("Invalid model generation.");
    return;
  }

  // Log and send the GPT reply
  console.log(reply);
  message.reply(reply!);
};
