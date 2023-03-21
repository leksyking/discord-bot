const Task = require("../../models/task");
const { Client, CommandInteraction } = require("discord.js");

module.exports = async (client, interaction) => {
  try {
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    const taskId = interaction.options.getString("id");
    const deleteTask = await Task.find({ _id: taskId });
    await deleteTask.remove();
    console.log(deleteTask);
    return;
  } catch (error) {
    console.log(error);
  }
};
