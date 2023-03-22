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
    console.log(getTasks);
    await interaction.editReply(`Your tasks: ${getTasks.task}`);

    return;
  } catch (error) {
    console.log(error);
  }
};
