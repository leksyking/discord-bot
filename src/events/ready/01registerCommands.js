const { testServer } = require("../../../config.json");
const getApplicationCommands = require("../../utils/getApplicationCommands");
const areCommandsDifferent = require("../../utils/areCommandsDifferent");
const getLocalCommands = require("../../utils/getLocalCommands");
const { REST, Routes } = require("discord.js");

module.exports = async (client) => {
  try {
    const localCommands = getLocalCommands();
    const commands = [];
    const applicationCommands = await getApplicationCommands(
      client,
      testServer
    );

    const rest = new REST({ version: "10" }).setToken(
      process.env.DISCORD_BOT_TOKEN
    );

    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand.data;

      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name
      );

      if (existingCommand) {
        if (localCommand.deleted) {
          await applicationCommands.delete(existingCommand.id);
          console.log(`Deleted command "${name}".`);
          continue;
        }

        // let hry = options.forEach((opt) => opt);
        if (areCommandsDifferent(existingCommand, localCommand)) {
          await applicationCommands.edit(existingCommand.id, {
            description,
            options: options.options, //can change this to options.options later
          });
          console.log(`Edited command "${name}".`);
        }
      } else {
        if (localCommand.deleted) {
          console.log(
            `Skipping registering command "${name}" as it's set to delete.`
          );
          continue;
        }
      }
      client.commands.set(localCommand.data.name, localCommand);
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
