const { SlashCommandBuilder } = require("discord.js");

//create slash commands
module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("pong!"),
  callback: (client, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
