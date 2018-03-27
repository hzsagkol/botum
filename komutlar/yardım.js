const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `hz+banned = Dene ve Gör! \nhz+avatarım = Avatarınınızı Gösterir. \nhz+herkesebendençay = Herkese Çay Alırsınız. \nhz+koş = Koşarsınız.\nhz+çayiç = Çay İçersiniz. \nhz+çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nhz+çayaşekerat = Çaya Şeker Atarsınız. \nhz+yumruh-at = Yumruk Atarsınız. \nhz+yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nhz+sunucuresmi = BOT Sunucunun Resmini Atar. \nhz+sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nhz+kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nhz+çak = Bir Beşlik Çakarsınız. \nhz+random = Random Atarsınız. \nhz+baklava = Baklava Ismarlarsınız. `)
  .addField("**Sunucu Yetkilisi Komutları**", `hz+uzaklaştır = İstediğiniz Kişiyi Sunucudan Uzaklaştırır. \nhz+at  = İstediğiniz Kişiyi Sunucudan Atar. \nhz+uzaklaştırmayıkaldır = İstediğiniz Kişinin Yasağını Açar. \nhz+sustur = İstediğiniz Kişiyi Susturur. -MUTED- \nhz+oylama = Oylama Açar. \nhz+duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "hz+yardım = BOT Komutlarını Atar. \nhz+bilgi = BOT Kendisi Hakkında Bilgi Verir. \nhz+ping = BOT Gecikme Süresini Söyler. \nhz+davet = BOT Davet Linkini Atar. \nhz+istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı Komutları:**", " **Güvenlik Amacı İle Yapımcı Komutları Gösterilmiyor** ")
  .setFooter('**Alt yapıdır.**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
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
  usage: 'hz+yardım [komut]'
};
