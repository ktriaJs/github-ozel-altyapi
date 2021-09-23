const exp = require("constants");
const Discord = require(`discord.js`);

exports.run = async(client, message, args) => {
    if (message.channel.type !== "text") return;
    const limit = args[0] ? args[0] :0;
    if(limit) {
            var ktria = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTimestamp()
            .setDescription(`Eksik Argüman Örnek Kullanım : \`slowmode 10\``)
            message.channel.send({ktria})
            return
    }
if (limit > 31) {
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`mask 30 saniye girilebilir`).setColor(`RANDOM`));    
}
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`limit **${limit}** saniye olarak ayarlandı`).setColor('RANDOM'));
var request = require(`request`);
Request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};

exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 3,
    aliases: [`ktria`,`slowmode`]
};

exports.help = {
    name: `slowmode`
};