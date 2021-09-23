const Discord = require(`discord.js`)

    exports.run = (client, message, args) => {

        if(!message.member.roles.cache.has("ban hamer rol id")){
            const yetersizyetki = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(`${message.author} **yeterli yetkiye sahip değilsin**`)
            return message.channel.send(yetersizyetki)  
        
        }
    
    let sebep = args.slice(1).join(` `);
    let üye = message.mentions.members.first();

    if(!üye){
        const banyiecek = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`${message.author} **ban yiecek üyeyi etiketleyiniz`)
        return message.channel.send(banyiecek)
    }
    
    if(!sebep){
        const hata = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`${message.author} **sebep girmelisiniz**`)
        return message.channel.send(hata)
    }
    
    if(üye && sebep){
        üye.ban({readon: sebep})

        const ban = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(`
            \`\`\`Banlanan Kullanıcı : ${üye} \`\`\` 
            \`\`\`Banlayan Yetkili :  ${message.author}\`\`\` 
            \`\`\`Banlanma Sebepi : ${sebep}\`\`\` `)
            .setAuthor(`${message.author.username} üye banlandı `, message.author.avatarURL({dynamic: true}))
            message.channel.send(ban)
    }
    
    }

    exports.conf = {
        enabled: true,
        guildOnly: false,
        permLevel: 0,
        aliases: [`ktria`,`ban`]
    }

    exports.help = {
        name: `ban`
    }