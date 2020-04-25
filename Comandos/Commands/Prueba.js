const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: "prueba",
    description: "Simplemente un mensaje de prueba",
    execute(message, args) {
        message.channel.send({embed: {
            color: 3447003,
            description: "Esto es un simple mensaje de prueba."
          }});
    }
}