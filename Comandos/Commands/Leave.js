module.exports = {
    name: 'leave',
    description: "Comando hace salir al bot del canal",
    async execute(message, args, ops) {
        
        //COMPROBAR QUE EL 'AUTHOR' ESTA CONECTADO A UN CANAL DE VOZ
        if (!message.member.voice.channel) return message.channel.send('Por favor conectate a un canal de voz');

        //COMPROBAR QUE EL BOT ESTA CONECTADO A UN CANAL DE VOZ
        if (!message.guild.me.voice.channel) return message.channel.send('Lo siento, el bot ya está conectado a un canal de voz');

        //COMPROBAR QUE EL BOT ESTA EN EL MISMO CANAL QUE EL 'AUTHOR'
        if (message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send('Perdon pero no estas conectado al mismo canal que el bot');

        //SALIR DEL CANAL
        message.guild.me.voice.channel.leave();

        message.channel.send('Saliendo del canal...');//ENVIA MENSAJE 
    }

}