const { SlashCommandBuilder } = require("discord.js");

//create slash commands
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("pong!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("help")
        .setDescription("Get information about ping")
        .addStringOption((option) =>
          option.setName("user").setDescription("ponging").setRequired(true)
        )
    ),
  callback: (client, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
