# SummaryBot 🤖
SummaryBot is a Discord bot designed to make your Discord server conversations more enjoyable and efficient. It's packed with a bunch of handy features to help you manage and keep track of your conversations with ease.

The bot is entirely open-source, and anyone is free to use it. If you'd like to help out with the project, contributions in the form of Cardano (ADA) are appreciated at the following address: `addr1qxe8s0hvd5l5ehkadxzheechz6g404qppqcaqx4p2ykckpa9wl0end4p9uauqjt0h7yqtdt4qzs3hdfwe5ev4tmhfcpq98fq5z`.

## Features 🌟
- Get the current time in UTC
- Summarize conversations since a specified time in UTC
- Interact with the OpenAI GPT-3.5 model

## Requirements 📚
Before you get started, make sure you have the following:

- `npm` and `ts-node` installed on your machine
- A Discord bot created and set up to obtain a bot token. You can create a new bot on the [Discord Developer Portal](https://discord.com/developers/applications)
    - You must also set permissions to control what actions your bot can perform in guilds, The bot should be granted all message reading permissions
    - The bot needs to have the MESSAGE CONTENT INTENT enabled
    - Follow the oauth2 link you generated to add the Bot to your server

## Installation 💽
1. Clone the repository
2. Install the required dependencies using npm install
3. Set up your environment variables by creating a .env file and filling in the necessary API keys and configurations
4. Run the bot using npm start

### required .env variables
- BOT_TOKEN
- OPENAI_API_KEY

**_NOTE:_**  The project relies on my personal [utility package](https://github.com/santiagoziel/service-utils) for managing environment variables in the configuration.ts file. This package is exclusively available via the GitHub registry. To install github registry npm packages, follow these  [instruccions](https://docs.github.com/en/enterprise-server@3.4/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package) Alternatively, you can handle .env variables using your preferred method.

## Usage 💡
After setting up the bot, you can interact with it using commands. Here are some examples:

- !utc: Get the current time in UTC format.
- !messagessince HH:mm: Summarize the conversation since the specified time (in UTC).
- !gpt your_question_here: Ask GPT-3.5 a question, and the bot will provide a response.

## Contributing
Contributions to the project are welcome! Feel free to fork the repository, make changes, and submit a pull request.

## License
This project is open-source and free for anyone to use. However, if you'd like to help support the project, donations in the form of Cardano (ADA) are appreciated at the following address: `addr1qxe8s0hvd5l5ehkadxzheechz6g404qppqcaqx4p2ykckpa9wl0end4p9uauqjt0h7yqtdt4qzs3hdfwe5ev4tmhfcpq98fq5z`.

Enjoy using SummaryBot and happy summarizing!

#### PD
I asked chatGPT to generate a midjourney promt based on what i explained the bot did and this is what came out

<img src="https://media.discordapp.net/attachments/698660293554733086/1089388237107253268/summaryPF.png" alt="PF pic" width="300" />
