const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
let yardım = new Discord.RichEmbed()  
.setTitle('__**SAYAÇ ayarlamak**__')
.setColor('BLUE')
.setDescription('__**a!sayaç-ayarla**__ 》 Sayacı Ayarlar.\n Örnek: `a!sayaç-ayarla #logkanalı **Sayı**` \n \n __**a!sayac-hg-msg **__》 Sayaç Hoşgeldin Mesajını Ayarlar.\n Örnek: `a!sayac-hg-msg -server-, Sunucumuza Hoşgeldin, -uye-! -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı!, **-uyesayisi-** Kişiyiz.` \n \n __**a!sayac-bb-msg**__ 》 --Sayaç Bay Bay Mesajını Ayarlar.\nÖrnek: `a!sayac-bb-msg -uyetag-, Sunucumuzdan Ayrıldı, -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı. **-uyesayisi-** Kişiyiz.`')
  .addField('__**Kullanabileceğiniz Değişkenler**__',`
-uye- 》 Üyeyi Etiketler.
-rol- 》 Rolün İsmini Ekler.
-server- 》 Server İsmini Yazar.
-uyesayisi- 》 Üye Sayısını Atar.
-botsayisi- 》 Bot Sayısını Atar.
-kanalsayisi- 》 Kanal Sayısını Atar.
-bolge- 》 Sunucu Bölgesinin İsmini Atar.
-kalanuye- 》 Hedefe Kaç Kişi Kalmış Gösterir.
-hedefuye- 》 Hedef Rakamı Gösterir.
`)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'sayaç',
  description: 'sayaç', 
  usage: 'sayaç'
};