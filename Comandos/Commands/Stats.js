const { MessageEmbed } = require('discord.js');
const moment = require("moment");

module.exports = {
  name: 'stats',
  description: "Comando para mostrar stats del bot",
  execute(message, args) {
    const Bodoque = message.client;
    const actividad = moment.duration(Bodoque.uptime).format("D [dias], H [hrs], m [mins], s [secs]");
    const embed = new MessageEmbed()
      .setColor('GREEN')
      .setAuthor(`Bot Bodoque`, Bodoque.user.avatarURL())
      .setDescription(`**Información del cliente**`)
      .addField(`Developer`, `Kyntal#6652`, true)
      .addField(`Versión`, `v12`, true)
      .addField(`Libreria`, `discord.js (v12)`, true)
      .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
      .addField(`Uptime`, actividad, true)
      .addField(`Servidores`, Bodoque.guilds.cache.size, true)
      .addField(`Usuarios`, Bodoque.users.cache.size, true)
      .addField(`Canales`, Bodoque.channels.cache.size, true)
      .addField(`Conexiones a voz`, Bodoque.voice.connections.size, true);

    message.channel.send(embed);
  }

}