//'npm i ytdl-core node-opus'
const ytdl = require('ytdl-core');
// command handler
module.exports = {
    name: 'play',
    description: "Comando para poner musica en el canal de voz",
    async execute(message, args, ops) {

        //Comprobar que el 'author' este conectado al canal de voz
        if (!message.member.voice.channel) return message.channel.send('Por favor conectate a un canal de voz');

        //Comprobar que el bot está conectado a un canal de voz
        if (message.guild.me.voice.channel) return message.channel.send('Lo siento, el bot ya está conectado a un canal de voz');

        //Comprobar que el 'author' puso una URL
        if (!args[0]) return message.channel.send('Perdón. por favor ingresa una url luego del commando `b.`');

        //Validar la info
        const validate = await ytdl.validateURL(args[0]);

        //Comprobar validateurl
        if (!validate) return message.channel.send('Lo siento, por favor ingresa una url valida luego del comando `b.`');
        //Es en función boolean

        //Buscar la info del video
        const info = await ytdl.getInfo(args[0]);

        // conecta el bot al canal del 'author'
        const connection = await message.member.voice.channel.join();

        //funcion play para canción con URL
        const dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));

        //Mensaje de salida, que se reproduce ahora
        message.channel.send(`Ahora escuchando: ${info.title}`);

    }
}