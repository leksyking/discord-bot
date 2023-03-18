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
      console.log(localCommand);
      //Start
      if (localCommand.deleted) {
        console.log(
          `Skipping registering command "${localCommand.data.name}" as it's set to delete.`
        );
        continue;
      }

      commands.push(localCommand.data);
      console.log(`Registering command "${localCommand.data.name}"`);
    }

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.DISCORD_CLIENT_ID,
        process.env.DISCORD_GUILD_ID
      ),
      { body: commands }
    );
    console.log("Registered slash commands...");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};
