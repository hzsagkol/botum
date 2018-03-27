const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' ÇAK BİR BEŞLİK.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`http://gdora.milliyet.com.tr/Detail/2010/05/07/-cak-bir-beslik--doga-fotograflari-hayvanlar-alemi-1177937.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çak',
  description: 'çakarsınız.',
  usage: 'hz+çak'
};
