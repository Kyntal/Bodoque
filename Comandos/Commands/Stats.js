const { MessageEmbed } = require('discord.js');
const moment = require("moment");

    module.exports = {
        name: 'stats',
        description: "Comando para mostrar stats del bot",
                execute(message, args) {
                    const actividad = moment.duration(message.client.uptime).format("D [dias], H [hrs], m [mins], s [secs]");
                    let embed = new MessageEmbed()
                        .setColor('GREEN') 
                        .setAuthor(`Bot Bodoque`, message.client.user.avatarURL())
                        .setDescription(`**Información del cliente**`)
                        .addField(`Developer`, `Kyntal#6652`, true)
                        .addField(`Version`, `v12`, true)
                        .addField(`Libreria`, `Discord ^12.2.0 (Js)`, true)
                        .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
                        .addField(`Uptime`, `${actividad}`, true)
                        .addField(`Servidores`, `${message.client.guilds.cache.size}`, true)
                        .addField(`Usuarios`, `${message.client.users.cache.size}`, true)
                        .addField(`Canales`, `${message.client.channels.cache.size}`, true)
                        .addField(`Conexiones a voz`, `${message.client.voice.connections.size}`, true)
                    
                    message.channel.send(embed);
                }
            
}