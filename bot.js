require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

let prefix = "!";
client.on("ready", (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", (msg) => {
  console.log(msg);
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const commandBody = msg.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - msg.createdTimestamp;
    msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
