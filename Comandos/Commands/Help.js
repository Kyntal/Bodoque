const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'help',
  description: "Comando de ayuda.",
  execute(message, args) {
    const embed4 = new MessageEmbed()
      .setColor(0x66ff66)
      .setTitle("Aquí tienes la lista de comandos: ")
      .setDescription("Prefijo para usar comandos `b.`")
      .addField(":information_source: Información:", "`uinfo` `stats` `tiempo`")
      .addField(":tada: Demás comandos :", "`twitch` `prueba`")
      .addField("Puedes hablar con el bot... Si te sientes sólo :v ", "`F`, `no`, `hola`\ Aquí no se usa el prefijo")
      .setImage("https://vignette.wikia.nocookie.net/31minutos/images/a/a7/Bodoque.jpg")
    message.channel.send(embed4)
  },
};