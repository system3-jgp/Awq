const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {

let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
  
  let aktif = await db.fetch(`bottemizle_${message.guild.id}`)
  if (aktif) {
    db.delete(`bottemizle_${message.guild.id}`)
    message.channel.send(`Bot eklendiğinde atılması için ayarlanmış sistem başarıyla kapatıldı.`)
  }
 
  if (!aktif) {
    db.set(`bottemizle_${message.guild.id}`, 'aktif')
    message.channel.send(`Başarılı! Artık sunucuya bot eklendiğinde otomatikmen güvenlik sebebiyle atılacak.`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botkoruma , botengelle bot-engelle'],
  permLevel: 3
};

exports.help = {
  name: 'bot-koruma',
  description: 'Sunucuya bot eklendiğinde atılmasını sağlayan sistemi başarıyla aktifleştirirsiniz/kapatırsınız.',
  usage: 'deee'
};