const fs = require('fs')

exports.run = (client, message, args) => {
var list = [];
message.guild.channels.forEach(kan => {
let parent;
if(kan.parent) parent = kan.parent.name
else parent = "Yok"
list.push({ 
"tip": `${kan.type}`,"isim": `${kan.name}`,"parentname": `${parent}`
})
})
fs.writeFile("././pikachucode-sunucuyedekle.json", JSON.stringify(list))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yedekal"],
    permLevel: 4
}

exports.help = {
    name: 'yedek-al',
    description: 'Yedek Alıyo.',
    usage: "yedekal"
}