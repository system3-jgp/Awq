const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanmak için yeterli izne sahip değilsin.`)

let p = "prefix"
  
let yaz = args[0];

if (!yaz) return message.channel.send(`:x: Lütfen bir bot id yazın.(Giriş izni iptal etmek için \`${p}giriş-izni iptal <botid>\`**`)

if (yaz === "iptal") {
 db.delete(`pikachucodebotİzinli_${args[1]}`) 
  message.channel.send(`\`${args[1]}\` IDsine sahip botun giriş izni iptal **edildi!**`)
} else {
   const embed = new Discord.RichEmbed() 
   .setTitle(`:warning: Uyarı!`)
   .setColor("RANDOM")
   .setDescription(`\`${yaz}\` IDsine sahip botun sunucunuza giriş verilmesini onaylıyor iseniz **onaylıyorum** yazın.`)
   .setFooter(`30 Saniye içerisinde cevap vermez iseniz iptal olacaktır!`)
  message.channel.send(embed) 
  var filtre = m => m.author.id === message.author.id
    message.channel.awaitMessages(filtre,{max: 1 ,time: 30000, errors: ["time"]}).then(collected => { 
       if (collected.first().content === "onaylıyorum" || collected.first().content === "evet") {
       
db.set(`pikachucodebotİzinli_${yaz}`, "İzinli")
message.channel.send(`\`${yaz}\` IDsine sahip bot **doğrulandı!** Sunucuya **eklenebilir!**`)
       }})
       }
}
exports.conf = {
  guildOnly : true,
  enabled : true,
  aliases : [],
  permLevel : 0,
  kategori : `Ayarlar`
}
exports.help = {
  name : "pikahucodegiriş-izni",
  description : "Pikachu Code Sunucusuna Aittir! |Sunucuyu botlara karşı koruyan sistem. (Kullanmanızı öneririz)",
  usage : "giriş-izni <botid>"
}