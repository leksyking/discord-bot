require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const eventHandler = require("./handlers/eventHandler");
const connect = require("./database/connect");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.commands = new Collection();
eventHandler(client);

(async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("Successfully connected to the database");

    await client.login(process.env.DISCORD_BOT_TOKEN);
  } catch (error) {
    console.log(error);
  }
})();
