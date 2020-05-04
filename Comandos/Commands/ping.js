module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.', {files: ["https://cdn.discordapp.com/attachments/359425464885837827/706824664340627506/JauntyBeautifulBluewhale-size_restricted.gif"]});
	},
};