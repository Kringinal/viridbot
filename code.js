/* SETTINGS START */
const prefix = ">"
const bot_token = process.env.botToken;
const welcomeMessage = "Hi there, welcome to Winter Armada!";
const mainChatChannelID = "672320190284955658";
/* SETTINGS END */

/* PACKAGES START */
const Discord = require('discord.js');
const bot = new Discord.Client();
/* PACKAGES END */


bot.on('ready', () => {
  console.log('Turned on Discord bot');
  bot.user.setActivity(`${bot.users.size} comrades!`, { type: 'WATCHING' });
  bot.channels.get(bot.channels.get(`${mainChatChannelID}`).id).send(`**I'm Alive!** :warning:`)
})

bot.on('message', async message => {

  const args = message.content.split(/[ ]+/)
  const owner = message.guild.roles.find(role => role.name === "Viceroy");
    
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (message.content.toLowerCase().startsWith(`${prefix}hi`)){
    return message.chennel.send(`Hello there, ${message.author}!`)
  }


});


bot.login(bot_token)
