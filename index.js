const {Client, GatewayIntentBits} = require("discord.js") ;
const client=new Client({
    intents:[GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]}); //permissions that we grant to our bot

client.on("messageCreate",(message)=>{
    if (message.author.bot) return;
    message.reply({
        content:"Hi,how may I help you?",
    });
});

client.on ("interactionCreate", interaction =>{
    console.log(interaction);
    interaction.reply('Kohli!');
});

client.login("//enter your key");




