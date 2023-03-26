import { Message } from "discord.js"
import { OpenAIApi, CreateCompletionRequest } from "openai"
import { modelConfiguration } from "../bot";

/**
 * Processes user input and generates a response using the GPT-3 or GPT-3.5 models from OpenAI
 * @param message 
 * @param args 
 * @param openai 
 * @param max_tokens 
 * @param model 
 */
export const GPT = async (message: Message, args: string[], openai: OpenAIApi, max_tokens: number, model: modelConfiguration) => {
  // Log input arguments
  console.log(`GPT got ${args.join(" ")}`);
  
  let reply: string | undefined;

  // Generate GPT reply based on model generation
  if (model.gen === "3.5") {
    const completition = await openai.createChatCompletion({
      model: model.version,
      messages: [{ role: 'user', content: args.join(" ") }],
      temperature: 0.2,
      max_tokens
    });
    reply = completition.data.choices[0].message?.content ?? '';
  } else if (model.gen === "3") {
    const completion = await openai.createCompletion({
      model: model.version,
      prompt: args.join(" "),
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