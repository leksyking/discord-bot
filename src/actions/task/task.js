const Task = require("../../models/task");
const { Client, CommandInteraction } = require("discord.js");

module.exports = async (client, interaction) => {
  try {
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    const taskId = interaction.options.getString("id");
    const getTask = await Task.findById({ taskId });
    console.log(getTask);
    return;
  } catch (error) {
    console.log(error);
  }
};
