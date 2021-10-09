const { MessageEmbed } = require("../../YouTiFy_Initializer/youtify.djs");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports.run = async (client, message) => {
    const Channel = message.member.voice.channel;
    if (!Channel) {
        await message.react("🟡")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬ClearQueue\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**Not connected to any VoiceChannel!**`, true))
            .catch(console.error);
        return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    const Queue = client.queue.get(message.guild.id);
    if (!Queue) {
        await message.react("🟡")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬ClearQueue\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**No song in Queue, Please Add Some Songs By Using  ${client.YouTix}play or  ${client.YouTix}search Command!**`, true))
            .catch(console.error);
        return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    const MemBot = message.guild.me.voice.channel;
    if (!message.member.hasPermission("MANAGE_MESSAGES") && MemBot.members.length > 2) {
        await message.react("🔴")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#b13d3d")
            .setTitle(`\`💬ClearQueue\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**Request Cancelled Due To 2+ Members connected in current Voice Channel**`, true))
            .catch(console.error);
        return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
    // ===========================================================================================================================
    try {
        Queue.Songs = [];
        await Queue.Connection.dispatcher.end();
        await message.react("🍏");
    } catch (e) {
        await message.react("🔴")
        await message.channel.send(new MessageEmbed()
            .setTimestamp()
            .setColor("#b13d3d")
            .setTitle(`\`💬ClearQueue\``)
            .setAuthor(`🍏YouTify™`, `https://i.postimg.cc/gcX8075z/guitar-sing.gif`)
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
            .addField(`\`☣️Error\``, `**${e}**`, true))
            .catch(console.error);
        return;
    };
};
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓ 
// ===========================================================================================================================
module.exports.help = {
    name: "clearqueue",
    aliases: ["deletequeue", "cq", "dq"],
    cooldown: 7000,
    category: "Music",
    description: "Clear Music Queue!",
    usage: "Clearqueue",
    examples: ["clearqueue"]
};