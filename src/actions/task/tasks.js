const Task = require("../../models/task");
const { Client, CommandInteraction } = require("discord.js");

module.exports = async (client, interaction) => {
  try {
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    const { user } = interaction;

    const getTasks = await Task.find({ userId: user.id });
    const allTasks = getTasks.map((tasks) => tasks.task);

    await interaction.editReply(`Your tasks: ${allTasks}`);

    return;
  } catch (error) {
    console.log(error);
  }
};
