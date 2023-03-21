const Task = require("../../models/task");
const { Client, CommandInteraction } = require("discord.js");

module.exports = async (client, interaction) => {
  try {
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    const { guildId, user } = interaction;

    const task = interaction.options.getString("task");
    const addTask = await Task.create({
      guildId,
      user: user.id,
      task,
    });
    console.log(addTask);
    return;
  } catch (error) {
    console.log(error);
  }
};
