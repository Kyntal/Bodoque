const { MessageEmbed, Message, avatarURL, client, uptime } = require('discord.js');

    module.exports = {
        name: 'stats',
        description: "Comando para mostrar stats del bot",
                execute(message, args) {
                    const actividad = moment.duration(message.client.uptime).format("D [dias], H [hrs], m [mins], s [secs]");
                    let embed = new MessageEmbed()
                        .setColor('GREEN') 
                        .setTitle(message.client.AvatarURL)
                        .setDescription(`**Información del cliente**`)
                        .addField(`Developer`, `Kyntal#6652`, true)
                        .addField(`Version`, `v12`, true)
                        .addField(`Libreria`, `Discord ^12.2.0 (Js)`, true)
                        .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
                        .addField(`Uptime`, `${actividad}`, true)
                        .addField(`Servidores`, `${client.guilds.cache.size}`, true)
                        .addField(`Usuarios`, `${client.users.cache.size}`, true)
                        .addField(`Canales`, `${client.channels.cache.size}`, true)
                        .addField(`Conexiones a voz`, `${client.voice.connections.size}`, true)
                    
                    message.channel.send(embed);
                }
            
}