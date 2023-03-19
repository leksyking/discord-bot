const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  callback: async (client, interaction) => {
    await interaction.deferReply({ fetchReply: true });
    console.log(interaction);
  },
  data: new SlashCommandBuilder()
    .setName("tickets")
    .setDescription("Manage tasks")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("help")
        .setDescription(
          "Get information about the suggestions category commands"
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("add")
        .setDescription("Add a new task")
        .addStringOption((option) =>
          option
            .setName("task")
            .setDescription("task to be added")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("tasks").setDescription("Show all tasks")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("task")
        .setDescription("Get a single task")
        .addStringOption((option) =>
          option.setName("id").setDescription("Task id").setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("edit")
        .setDescription("Add new task")
        .addStringOption((option) =>
          option.setName("id").setDescription("Task id").setRequired(true)
        )
        .addStringOption((option) =>
          option.setName("task").setDescription("New task").setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("delete")
        .setDescription("Delete a task")
        .addStringOption((option) =>
          option.setName("id").setDescription("Task id").setRequired(true)
        )
    ),
};
