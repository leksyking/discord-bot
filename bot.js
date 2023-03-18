require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");

const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
client.commands = new Collection();
let prefix = "!";

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;

    interaction.reply(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

// client.on("messageCreate", (msg) => {
//   if (msg.author.bot) return;
//   if (!msg.content.startsWith(prefix)) return;

//   const commandBody = msg.content.slice(prefix.length);
//   const args = commandBody.split(" ");
//   const command = args.shift().toLowerCase();

//   if (command === "ping") {
//     const timeTaken = Date.now() - msg.createdTimestamp;
//     msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
//   } else if (command === "sum") {
//     const numArgs = args.map((arg) => parseFloat(arg));
//     const sum = numArgs.reduce((counter, x) => (counter += x));
//     msg.reply(`The sum of all the arguments you provided is ${sum}`);
//   }
// });
