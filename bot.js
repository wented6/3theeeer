const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['521341978659651596'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`Weented,`,'https://www.twitch.tv/MeeRcY')
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('We')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('Le')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('Se')) {
  client.user.setGame(argresult, "https://www.twitch.tv/meercy");
   message.channel.send(`${argresult} \` `)
}
});

client.login(process.env.WE);
