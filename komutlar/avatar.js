const Discord = require(`discord.js`)

    exports.run = (client, message, args) => {
        let üye = message.mentions.members.first();

        if(üye){
            const $kanal = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(`${üye} üyesinin avatarı`)
            .setImage(üye.user.avatarURL({dynamic: true, size: 2050}))
            message.channel.send($kanal)
        } else {
            const $kanal = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(`${message.author} avatarın`)
            .setImage(message.author.avatarURL({dynamic: true, size: 2050}))
            message.channel.send($kanal)
        }
    }


    exports.conf = {
        enabled: true,
        permLevel : 0,
        guildOnly: false,
        aliases: [`avatar`,`pp`]
    }


    exports.help = {
        name: `avatar`
    }