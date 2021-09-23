const Discord = require("discord.js");
const ayar = require("../ayar.js");

module.exports.run = async (client, message, args) => {


if(![(ayar.Owner)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

  
  
  let ktria = "**Seste Olmayan Yetkililer:**\n";
  message.guild.roles.cache.get(message.guild.roles.cache.get((ayar.yetkilirol)).members.map(r => {
    ktria += !r.voice.channel ? "\`\`\`<@" + r.user.id + ">\`\`\` \n" : "";
  }));

 
  message.channel.send("" + ktria + "").then(s => s.s);
};
module.exports.conf = {
  aliases: ["yetkilisay"]
};

module.exports.help = {
  name: "sesyt"
};