// npm i yt-search
const search = require('yt-search');

module.exports.run = async (bot, message, args, ops) => {

    // We gaan het liedje gaan zoeken met de argumenten die we meegegeven
    search(args.join(' '), function (err, res) {

        // Als er iets fout loopt.
        if (err) return message.channel.send("Er is iets verkeerd gegaan");

        // We gaan een lijst maken met maar 10 liedjes.
        var videos = res.videos.slice(0, 10);

        // Hier gaan we de response in steken.
        var response = '';

        // Over ieder liedje gaan in de lijst en mee in het bericht steken.
        for (var i in videos) {

            // Het bericht opmaken met het ID. We doen bij de i + 1 om er voor te zorgen dat er geen 0 staat bij het eerste liedje.
            // \r\n is een nieuwe lijn starten met een spatie op het einde van de regel.
            response += `**[${parseInt(i) + 1}]:** ${videos[i].title} \r\n`;

        }

        response += `Kies een nummer tussen 1-${videos.length}.`;

        // Verzenden van het bericht.
        message.channel.send(response);

        // Filter opzetten voor het nakijken als je een nummer meegeeft tussen 0 en het opgegeven getal van de opzoeklijst.
        const filter = music => !isNaN(music.content) && music.content < videos.length + 1 && music.content > 0;

        // Creeër een bericht ontvanger met die filter.
        const collection = message.channel.createMessageCollector(filter);

        // Steek al de video's die we vinden hier in onze ontvanger.
        collection.videos = videos;

        // Als er een bericht is gestuurd met cijfers tussen 0 en opgegeven getal dan gaan we het play command oproepen.
        collection.once('collect', function (music) {

            // Play command binnen halen.
            var commandFile = require('./APP.js');

            // Play afvuren en liedje starten of bij de lijst toevoegen.
            commandFile.run(bot, message, [this.videos[parseInt(music.content) - 1].url], ops);

        });

    });

}

module.exports.help = {
    name: "search",
    description: "Zoeken naar liedjes"
}
