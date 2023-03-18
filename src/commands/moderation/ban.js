const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

//create slash commands
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a member from the server")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("user")
        .setDescription("Get information about ban")
        .addMentionableOption((option) =>
          option
            .setName("target-user")
            .setDescription("The user to ban")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("done")
        .setDescription("done with the ban?")
        .addStringOption((option) =>
          option
            .setName("reason")
            .setDescription("The reason for banning")
            .setRequired(true)
        )
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  // deleted: Boolean,
  // devOnly: Boolean,
  // testOnly: Boolean,

  callback: (client, interaction) => {
    interaction.reply("ban");
  },
};
