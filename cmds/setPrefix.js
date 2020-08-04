module.exports.run = async(bot, msg, args,db) => {
    var argsF = new Array();
    argsF= args;

    db.collection('guilds').doc(msg.guild.id).get().then((q) => {
        if (q.exists) {
            if(q.data().guildOwnerID === msg.author.id) {
                var Owner = q.data().guildOwnerID;
            }
        }
    })

    if(msg.member === Owner || msg.member === 430722923419009024){
        if (argsF.length === 0) {
            msg.channel.send('Missing the prefix!');
        } else if (argsF.length === 1) {
            let newPrefix = args[0];

            db.collection('guilds').doc(msg.guild.id).update({
                'prefix' : newPrefix
            }).then(() => {
                msg.channel.send(`[prefix update]: new prefix ${newPrefix}`);
            });
        }
    } else {msg.channel.send("Do you have right permissions?");}
}

module.exports.help = {
    name: 'setPrefix'
}