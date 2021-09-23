const express = require(`express`);
const app = èxpress();
const Discord = require(`discord.js`);
const client = new Discord.Client();
const ayarlar = require(`./ayarlar.json`);
const chalk = require(`chalk`);
//Developing Bye Ktria
const fs = require(`fs`);
const moment = require(`moment`);
const db = require(`quick.db`);
const embed = new Discord.Embed();
require(`./util/eventloader`) (client);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`[${moment().format(`YYYY-MM-DD HH:mm:ss`)}] ${message}`);
};

client.commands = new Discord.Collection();
fs.readdir(`./komutlar/`, (err, files) => {
    if (err) console.error(err);
    log(`${files.lenght} Adet Komut Yüklenecek`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen KOmutlar : {props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(`./komutlar/${command}`)];
        let cmd = require(`./komutlar/${command}`);
        client.commands.delete(command);
        client.aliases.forEach((cmd, alias) => {
          if (cmd === command) client.aliases.delete(alias);
        });
        client.commands.set(command, cmd);
        cmd.conf.aliases.forEach(alias => {
          client.aliases.set(alias, cmd.help.name);
        });
        resolve();
      } catch (e){
        reject(e);
      }
    });
  };

  client.load = command => {
    return new Promise((resolve, reject) => {
      try {
        let cmd = require(`./komutlar/${command}`);
        client.commands.set(command, cmd);
        cmd.conf.aliases.forEach(alias => {
          client.aliases.set(alias, cmd.help.name);
        });
        resolve();
      } catch (e){
        reject(e);
      }
    });
  };

  client.unload = command => {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(`./komutlar/${command}`)];
        let cmd = require(`./komutlar/${command}`);
        client.commands.delete(command);
        client.aliases.forEach((cmd, alias) => {
          if (cmd === command) client.aliases.delete(alias);
        });
        resolve();
      } catch (e){
        reject(e);
      }
    });
  };

  client.elevation = message => {
      if(!message.guild) {
          return; }
          let permlvl = 0;
          if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
          if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
          if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
        };

       let Login = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
       
        client.on(`error`, e => {
            console.log(chalk.bgRed(e.replace(Login, `düzeltildi`)));
        });

        client.on('warn', e => {
            console.log(chalk.bgYellow(e.replace(Login, 'Düzeltildi')));
          });

          client.login(ayarlar.token);



          // burdan https://www.twitch.tv/qaantheraven kardeşimin twitch ini takip edin 
         
          // 2. olarak haley dosti için paylaşıyorum <3