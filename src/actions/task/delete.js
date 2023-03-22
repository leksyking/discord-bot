const Task = require("../../models/task");
const { Client, CommandInteraction } = require("discord.js");

module.exports = async (client, interaction) => {
  try {
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    const taskId = interaction.options.getString("id");
    const deleteTask = await Task.find({ password: taskId });
    await deleteTask.remove();
    await interaction.editReply("Task successfully deleted");
    console.log(deleteTask);
    return;
  } catch (error) {
    console.log(error);
  }
};
