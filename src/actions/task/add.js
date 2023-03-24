const Task = require("../../models/task");
const { Client, CommandInteraction } = require("discord.js");
const generator = require("generate-password");

module.exports = async (client, interaction) => {
  try {
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    const password = generator.generate({
      length: 4,
      numbers: true,
      lowercase: true,
      uppercase: false,
    });

    const { guildId, user } = interaction;

    const task = interaction.options.getString("task");
    const addTask = await Task.create({
      guildId,
      userId: user.id,
      task,
      password,
    });
    await interaction.editReply(
      `You added a new task: ${addTask.task} and your id is ${addTask.password}`
    );

    return;
  } catch (error) {
    console.log(error);
  }
};
