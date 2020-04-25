const { Message, MessageEmbed, Util } = require('discord.js');
module.exports = { 
    name: "twitch",
    description: "Muestra twitch de Kyntal :v(SPAM)",
    execute(message, args) {
        message.channel.send({embed: {
            color: 15158332,
            author: {
                name: `${message.author.username}#${message.author.discriminator}`,
                icon_url: message.author.displayAvatarURL({ size: 512 })
            },
            title: "Canal de Twitch ♥Kyntal",
            url: "http://www.twitch.tv/kyntal1",
            description: "Sigueme para sus buenas risas♥",
            fields: [
              {
                name: "Instagram",
                value: "Puedes seguirme en Instagram [claudio_ch.m_](https://www.instagram.com/claudio_ch.m_/) si quieres..."
              },
              {
                name: "Salen sus Rocketo?",
                value: "**__Jugueeemo po ctm__** *Steam:* [kyntalsio](https://steamcommunity.com/id/kyntalsio)"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: message.author.displayAvatarURL({ size: 64 }),
              text: "http://www.twitch.tv/kyntal1"
            }
          }
        });
    }
}
