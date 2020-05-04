const { MessageEmbed } = require('discord.js');
const weather = require("weather-js");// npm install weather-js (https://www.npmjs.com/package/weather-js)
const moment = require("moment");

module.exports = {
    name: 'tiempo',
    description: "Comando que muestra el pronóstico del tiempo",
    execute(message, args) {

        weather.find({ search: args.join(" "), degreetype: "C" }, function (err, result) { //Fixear el tipo de grado, sólo sale en Fahrenheit.
            if (err) message.channel.send(err);

            if (result.length === 0){
                message.channel.send('**📍Por favor, ingresa una ciudad/localidad valida.**')
                return;
            }

            const current = result[0].current;
            const location = result[0].location;
            const forecast = result[0].forecast;
            const temps = moment(location.observationtime).format("HH:mm");
            const grado = `(${location.degreetype})`
                .replace("C", "ºC")
                .replace("F", "ºF");
            const grado2 = `${location.degreetype}`
                .replace("C", "Grado Celsius")
                .replace("F", "Grado Farenheit");

            const embed = new MessageEmbed()
                .setDescription("**" + current.skytext + "**")
                .setAuthor(`Clima de ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor("00f8ff")
                .addField("Coordenadas", `${location.lat}, ${location.long}`, true)
                .addField("Zona Horaria", `UTC${location.timezone}`, true)

                .addField("Hora", `${temps}`, true)
                .addField("Tipo de Grado", `${grado2} ${grado} `, true)

                .addField(
                    "Temperatura",
                    `${current.temperature}${location.degreetype}`
                        .replace("C", " ºC")
                        .replace("F", " ºF"),
                    true
                )
                .addField(
                    "Se siente como",
                    `${current.feelslike}${location.degreetype}`
                        .replace("C", " ºC")
                        .replace("F", " ºF"),
                    true
                )

                .addField("Vientos", current.winddisplay, true)
                .addField("Humedad", `${current.humidity}%`, true);
            message.channel.send(embed).catch(err => console.log(err.message));
        });

    }

}