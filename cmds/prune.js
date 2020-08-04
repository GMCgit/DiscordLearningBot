module.exports.run = async (bot, msg, args, db) => {
	var Owner;
	db.collection('guilds').doc(msg.guild.id).get().then((q) => {
        if (q.exists) {
            if(q.data().guildOwnerID === msg.author.id) {
            	Owner = q.data().guildOwnerID;
            }
        }
    })

    if(msg.member === Owner || msg.member === 430722923419009024) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return msg.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return msg.reply('you need to input a number between 1 and 99.');
		}

		msg.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			msg.channel.send('there was an error trying to prune messages in this channel!');
		});} else {msg.channel.send("You don't have right permissions for this!")}
}

module.exports.help = {
    name: "prune"
}