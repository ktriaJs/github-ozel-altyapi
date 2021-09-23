const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
    let ktria = args.slice(0).join(` `);
    if (ktria.length < 1) return message.reply(`botun yazması için bir yazı yazın`);
    message.channel.send(ktria);
    message.delete();
};

exports.conf = {
    permLevel: 0,
    aliases: [`yaz`,`ktria`]
};

exports.help = {
 name: `yaz`
}