/* SETTINGS START */
const prefix = ">"
const bot_token = process.env.botToken;
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
    
  if (message.author.bot) return;

  if (message.content.toLowerCase() === `${prefix}hey`)
    message.channel.send(`Hello there, ${message.author}!`)
  
  if (message.content.toLowerCase() === `${prefix}av`)
        message.channel.send(`Here you go my lord.`);
        message.reply(message.author.avatarURL);
});


bot.login(bot_token)
