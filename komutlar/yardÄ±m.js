const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setDescription(`[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958847) | [Web Panel](https://blackbear.glitch.me/anasayfa) | [Oy Ver](https://discordbots.org/bot/${client.user.id})\n\n\n`)
  
  .setThumbnail("https://cdn.discordapp.com/attachments/637906074925662210/637925522080399360/a.gif")
  .setTitle(`<:men:637363405627457557> Ares Yardım Komutları`)
  .addField(`» ${prefix}yetkili`, `Yetkili komutlarını gösterir.`)
.addField(`» ${prefix}kullanıcı`, `Kullanıcı komutlarını gösterir.`)
  .addField(`» ${prefix}nsfw`, `NSFW(+18) komutlarını gösterir.`)
  .addField(`» ${prefix}müzik`, `müzik komutları gösterir.`)
.setColor("0f0f0f")
message.channel.send(embedyardim)
 




};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
}
