require("dotenv").config();
const Discord = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    
    if (message.mentions.users.has(client.user.id)) {
      message.reply("That's me!");
    }
}
)

client.on('messageCreate', message => {

    if (message.content == client.user.username) {
      message.reply("That's me!");
    }
}
)

client.on('messageCreate', message => {
   
  if (message.content == '!random') {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    message.reply(`Your random number is ${randomNum}.`);
  }
});

client.on('messageCreate', message => {
  
  if (message.content == '!meow') {
    message.reply("Meow meow!");
  }
});

client.on('messageCreate', message => {

    let wisdom = ""
  
    if (message.content == '!decide') {
        
    const randomNum = Math.floor(Math.random() * 3);

      if(randomNum == 0) wisdom = "yes! :3";
      if(randomNum == 1) wisdom = "no! 3:";
      if(randomNum == 2) wisdom = "maybe! >:3";

      message.reply(`My meows tell me ${wisdom}`);
    }
  });


client.login(process.env.TOKEN);
