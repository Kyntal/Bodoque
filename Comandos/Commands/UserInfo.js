const { Message, MessageEmbed, Util } = require('discord.js');
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

module.exports = {
    name: "uinfo",
    description: "Información del usuario.",
    async execute(message = new Message(), args = new Array()) {
      const dMemberSince = message.author.createdAt;
      const mSince = { //SE EXTRAEN LAS FECHAS
      day: dias[dMemberSince.getDay()],
      date: dMemberSince.getDate(),
      month: meses[dMemberSince.getMonth()],
      year: dMemberSince.getFullYear()
      }

      let embed = new MessageEmbed()
          .setAuthor(message.author.username)
          .addField("Imagen :", message.author.displayAvatarURL())
          .setThumbnail(message.author.displayAvatarURL({ size: 512 }))
          .setDescription("Aquí está la información de tu usuario =)")
          .setColor("GREEN")
          .addField("Usuario Completo", `${message.author.username}#${message.author.discriminator}`)
          .addField("ID", message.author.id)
          .addField("Creado el", `${mSince.day} ${mSince.date} de ${mSince.month} del ${mSince.year}`)
          message.channel.send(embed);
        }
};