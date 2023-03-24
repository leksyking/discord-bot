const Task = require("../../models/task");
const { Client, CommandInteraction } = require("discord.js");

module.exports = async (client, interaction) => {
  try {
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    const taskId = interaction.options.getString("id");
    const deleteTask = await Task.findOneAndDelete({ password: taskId });
    await interaction.editReply("Task successfully deleted");

    return;
  } catch (error) {
    console.log(error);
  }
};
