module.exports = {
	name: 'misc',
	description: 'Misc commands!',
	execute(message, args) {
		const Discord = require('discord.js');
        const HelpEmbeded2 = new Discord.MessageEmbed()
        .setColor('#20e395')
        .setTitle('Misc commands!')
        .setAuthor('Totally not your developer')
        .setDescription('What fun things to do!')
        .addFields(
            { name: '&misc', value: 'Opens this 2nd nicely made card' },
            { name: '&bar', value: "Bar!"},
            { name: "&mafs", value: 'Tru equation!'},
            { name: "blackjack", value: "Game of Blackjack! &blackjack Create [number of players (1-3)] to start the game"}
        )
        .setTimestamp()
        .setFooter('What are you searching for down here?');
        message.channel.send(HelpEmbeded2);
	},
};