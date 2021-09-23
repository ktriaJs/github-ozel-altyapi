const Discord = require(`discord.js`);

exports.run = (message, params, bot) => {
    const ktria = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.userURL)
    .setColor(`RANDOM`)
    .setTgumbnail(message.guild.iconURL)
    .addField(message.guild.nameAcrony, true)
    .addField(`Bölge`, message.guild.region)
    .addField(message.guild.id, true)
    .addField(`Top üye` `${message.guild.members.filter( member => member.user.bot).size} bot | ${message.guild.memberCount} üye`, true)
    .addField(`tac sahibi`, message.guild.owner, true)
    .addField(`Top kanal`, `${messageçguild.channels.filter(chan => chan.type === `voice`).size} ses - ${message.guild.channels.filter(chan => chan.type === `text`).size} metin`, true)
    .addField(`Top Role`, message.guild.roles.map(role => role.name).join(`, `), true)
    .addField(`sunucu açılma tarihi`, message.guild.createdAt, true)
    .setFooter(`Developing Bye Ktria`)
    .setTimestamp()
    message.channel.send({ktria});
    message.react(`✓`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 2,
    aliases: [`ktria`,`basit-sunucubilgi`]
}