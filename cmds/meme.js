module.exports.run = async (bot, msg, args, db, UserId) => {
    const got = require('got');
    const Discord = require('discord.js');

    const Embed = new Discord.MessageEmbed()

    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        Embed.setTitle(`${memeTitle}`)
        Embed.setURL(`${memeUrl}`)
        Embed.setImage(memeImage)
        Embed.setColor('RANDOM')
        Embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
        msg.channel.send(Embed);
    })
}

module.exports.help = {
    name: 'meme'
}
