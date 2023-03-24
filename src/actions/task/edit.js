const Task = require("../../models/task");
const { Client, CommandInteraction } = require("discord.js");

module.exports = async (client, interaction) => {
  try {
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    const { user } = interaction;

    const taskId = interaction.options.getString("id");
    const task = interaction.options.getString("task");

    const editTask = await Task.findOne({ password: taskId, userId: user.id });
    editTask.task = task;
    await editTask.save();
    await interaction.editReply(`Edited task: ${editTask.task}`);

    return;
  } catch (error) {
    console.log(error);
  }
};
