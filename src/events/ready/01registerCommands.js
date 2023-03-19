const getLocalCommands = require("../../utils/getLocalCommands");
const { REST, Routes } = require("discord.js");

module.exports = async (client) => {
  try {
    const localCommands = getLocalCommands();

    const commands = [];

    const rest = new REST({ version: "10" }).setToken(
      process.env.DISCORD_BOT_TOKEN
    );

    for (const localCommand of localCommands) {
      const { name } = localCommand.data;

      client.commands.set(name, localCommand.data);
      commands.push(localCommand.data);

      await rest.put(
        Routes.applicationGuildCommands(
          process.env.DISCORD_CLIENT_ID,
          process.env.DISCORD_GUILD_ID
        ),
        { body: commands }
      );
      console.log(`Registered command "${name}"`);
    }
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};
