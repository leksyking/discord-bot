const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

//create slash commands
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a member from the server")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("user")
        .setDescription("Get information about ban...")
        .addUserOption((option) =>
          option
            .setName("user")
            .setDescription("Select a user")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option.setName("reason").setDescription("The reason for the ban")
        )
    ),
  permissionsRequired: [PermissionFlagsBits.Administrator],
  botPermissions: [PermissionFlagsBits.Administrator],
  // deleted: true,
  devOnly: true,
  // testOnly: Boolean,

  callback: (client, interaction) => {
    interaction.reply("ban");
  },
};
