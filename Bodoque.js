//ACTUALIZADO EL '25/04/2020' A LAS 16:41 
const Discord = require("discord.js");
const fs = require('fs');
const { prefix, IdOwner } = require("./config.json");
const token = require("./Clases/token.js");
const moment = require("moment");//ShompiHELP
require('moment-duration-format');//ShompiHELP

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Comandos/Commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./Comandos/Commands/${file}`);
  client.commands.set(command.name, command);
}
//DISTINTOS ESTADOS PARA EL BOT
const lista_actividad = [
  "Nota Verde",
  "Nesi Chupala",
  "Tulio renuncia!",
  "DOU",
  "¿A quién Baneo?",
];

client.once("ready", () => {
  console.log("Estoy listo! Bodoque está en Vivo =)");
  //LINEAS PARA CAMBIAR ESTADO DEL BOT
  setInterval(() => {
    const index = Math.floor(Math.random() * (lista_actividad.length)); //NÚMERO ALEATORIO ENTRE 1 Y LA LONGITUD DE LA LISTA
    client.user.setPresence({ status: "online", activity: { name: lista_actividad[index], type: "PLAYING" } });
  }, 300000);//TIEMPO MEDIDO EN MILISEGUNDOS '300000' SON 5 MINUTOS
});

//const prefix = config.prefix;

//MENSAJE DE BIENVENIDA
client.on('guildMemberAdd', member => {
  const user = member.user;
  const frase = "Disfruta tu estadía por acá!";
  const channel = member.guild.channels.cache.get("701636332203540490");//ID DEL CANAL DONDE SE PUBLICARÁ LA BIENVENIDA
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
client.on('guildMemberRemove', member => {
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

client.on('message', message => {
  //COMIENZO DE LOS TYPEOS PARA EL AUTISMO

  if (message.author.bot) return;

  if (message.content.startsWith("f")) {
    message.channel.send("Suelta la tecla 'F' Perro Conchetumare");
  } else if (message.content.startsWith("no")) {
    message.channel.send("y tu mamá");
  } else if (message.content.startsWith("hola")) {
    message.channel.send("Weeena perro conchetumare, ¿Como estás? ♥");
  }
  //FIN DE LOS TYPEOS PARA EL AUTISMO


  if (!message.content.startsWith(prefix)) return;

  console.log(`El usuario ${message.author.tag} escribió: ${message.content}`);//LOG CONSOLA

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();//DESDE EL PREFIJO EN ADELANTE IDENTIFICA SI HAY MAYUSCULAS O NO,
  // Y SI LO HAY, LAS TRANSFORMA EN MINUSCULAS

  //'BUSCA COMANDOS'
  if (!client.commands.has(command)) return;

  /*
  Leer nota de la linea 106.

  if (!client.commands.has(command))
    return message.reply("No encontré un comando con ese nombre!");
  */

  try {
    client.commands.get(command).execute(message, args);//LUEGO DE BUSCAR EL COMANDO, LO EXTRAE Y EJECUTA
  } catch (error) {
    console.error(error);
    //Nota de Shompi: Este mensaje solamente se va a enviar si el comando falla en algún punto de su ejecución, no si es que
    //el usuario escribe mal el comando, para eso deberias enviar el mensaje en el if de la linea 93.
    message.reply('Seguramente escribiste mal el comando... DOU');
  }
  //FIN DEL 'BUSCA COMANDOS' 

});

client.login(token)