const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");
const ytdl = require('ytdl-core');
const token = require("./Clases/token.js");

client.login(token)
//DISTINTOS ESTADOS PARA EL BOT
const lista_actividad = [
  "Nota Verde", 
  "Nesi Chupala",
  "Tulio renuncia!",
  "DOU",
  "¿A quién Baneo?",
  ];

client.on("ready", () => {
   console.log("Estoy listo! Bodoque está en Vivo =)");
   //LINEAS PARA CAMBIAR ESTADO DEL BOT
   setInterval(() => {
    const index = Math.floor(Math.random() * (lista_actividad.length)); //NÚMERO ALEATORIO ENTRE 1 Y LA LONGITUD DE LA LISTA
    client.user.setPresence({status: "online", activity:  {name: lista_actividad[index], type: "PLAYING"}});
    }, 300000);//TIEMPO MEDIDO EN MILISEGUNDOS '300000' SON 5 MINUTOS
});

const prefix = config.prefix;

//MENSAJE DE BIENVENIDA
client.on('guildMemberAdd', member=>{
    const user = member.user;
    const frase = "Disfruta tu estadía por acá!";
    const channel = member.guild.channels.cache.get("701636332203540490");//NOMBRE DEL CANAL DONDE SE PUBLICARÁ LA BIENVENIDA
     //EXCEPTION POR SI NO EXISTE EL CANAL if(!channel) return;

        const embed = new Discord.MessageEmbed()
          .setTitle(`➡ ¡${user.tag} se ha unido al servidor!`)
          .setTimestamp()
          .setDescription(frase)
          .setColor("RED")
          .setThumbnail(user.displayAvatarURL({ size: 512 }))
        channel.send(embed);
});
//MENSAJE DE DESPEDIDA
client.on('guildMemberRemove', member=>{
    const userexit = member.user;
    const frasexit = "Se fue el maricon :c";
    
    const channel = member.guild.channels.cache.get("701636332203540490");

    const embed2 = new Discord.MessageEmbed()
      .setTitle(`➡ ¡${userexit.tag} ha abandonado el servidor!`)
      .setTimestamp()
      .setDescription(frasexit)
      .setColor("RED")
      .setThumbnail(userexit.displayAvatarURL({ size: 512 }))
    channel.send(embed2);
});

client.on("message", (message) => {

    if (message.author.bot) return;

    console.log(`El usuario ${message.author.tag} escribió: ${message.content}`);

   if (message.content.startsWith(prefix + "invite")) {
    client
  //permiso de roles para usar el comando
      .generateInvite("ADMINISTRATOR")
      .then(link => {
       message.channel.send("Link de invitación: " + link);
      });
  }
  //MENSAJES POR COMANDO
  if (!message.content.startsWith(prefix)) return;
  //CMD PARA INFO DE USUARIO
  if(message.content.startsWith(prefix + "userinfo")){
      let embed = new Discord.MessageEmbed()
          .setAuthor(message.author.username)
          .addField("Imagen :", message.author.displayAvatarURL())
          .setThumbnail(message.author.displayAvatarURL({ size: 512 }))
          .setDescription("Aquí está la información de tu usuario =)")
          .setColor("#0381ff")
          .addField("Usuario Completo", `${message.author.username}#${message.author.discriminator}`)
          .addField("ID", message.author.id)
          .addField("Creado el", message.author.createdAt)
      message.channel.send(embed);
  }

  //COMIENZO DE LOS TYPEOS PARA EL AUTISMO
  if (message.content.startsWith("F")) {

    message.channel.send("Suelta la tecla 'F' Perro Conchetumare");
  }

  if (message.content.startsWith(prefix + "no")) {
    message.channel.send("y tu mamá");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Weeena perro conchetumare, ¿Como estás? ♥");
  }
  //FIN DE LOS TYPEOS PARA EL AUTISMO

  //
  if (message.content.startsWith(prefix +"prueba")){
    message.channel.send({embed: {
      color: 3447003,
      description: "Esto es un simple mensaje de prueba."
    }});
  }
  if (message.content.startsWith(prefix +"twitch")){
    message.channel.send({embed: {
      color: 15158332,
      author: {
          name: client.user.username,
          icon_url: client.user.displayAvatarURL({size: 128})
      },
      title: "Mi Canal de Twitch ♥",
      url: "http://www.twitch.tv/kyntal1",
      description: "Na po weon, deberías seguirme jolaperra",
      fields: [
        {
          name: "Instagram",
          value: "Puedes seguirme en Instagram ♥[claudio_ch.m_](https://www.instagram.com/claudio_ch.m_/)♥ si quieres..."
        },
        {
          name: "Salen sus Rocketo?",
          value: "**__Jugueeemo po ctm__**"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.displayAvatarURL({size: 64}),
        text: "http://www.twitch.tv/kyntal1"
      }
    }
  });
  }
  //FIN MENSAJES POR COMANDO


  if (message.content.startsWith(prefix + "help")) {//LISTA DE COMANDOS DEL BOT, ULTIMO UPDATE: 21/04/2020
    let embed4 = new Discord.MessageEmbed()
      .setColor(0x66ff66)
      .setTitle("Aquí tienes la lista de comandos: ")
      .setDescription("Prefijo para usar comandos `b.`")
      .addField(":information_source: Información de tu usuario :", "`userinfo`")
      .addField(":tada: Demás comandos :", "`twitch` `prueba`")
      .addField("Puedes hablar con el bot... Si te sientes sólo :v ", "`F`, `no`, `hola`\ Aquí no se usa el prefijo")
      .setImage("https://lh3.googleusercontent.com/proxy/0IxjZhSXEu5sJ5WdyiD1G-h0F1Ej3DdEwtThik47Zaq6u6oTgXv64ozG-uGMdGNzk096Mzr5altHu4BAYj9AIEW67Ijx6Zw7TagdVFpDg_5xh9eYnYX14lTGU1kYGANnak_NlA")
    message.channel.send(embed4);
  }
//Necesita tener una clave para usar la API de YouTube Data API v3
//video tutorial: https://www.youtube.com/watch?v=VxQPG991YUs
});