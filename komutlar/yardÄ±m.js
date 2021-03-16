const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('BLACK') 
.setImage("https://images-ext-1.discordapp.net/external/bLlAm3Nz12pHXbKqaPo7tmDylXS44JMFEp5dCrtESoA/%3Fsize%3D1024/https/cdn.discordapp.com/icons/742051058632884405/a_ad7a515a9e8b0f632e329d1debbab414.gif")
.addField(`**help commands**`,
          
 `
** &girl | &boy | &couple | &baby | &anime | &animal |**


**Info Command**

**| &bot | &avatar | &help | &ping |**

    
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=821364810582327326&permissions=37223488&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/MaDB4gap)**`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: '',
  description: 'help bot',
  usage: 'dev jano'
};
