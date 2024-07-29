const {REST, Routes} = require ("discord.js");
const commands =[
    {
        name:"Virat",
        description:"Kohli!",
    },
];
const rest= new REST({version:'10'}) .setToken("//own client id token");

(async() =>
{
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1265984442652954667"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

