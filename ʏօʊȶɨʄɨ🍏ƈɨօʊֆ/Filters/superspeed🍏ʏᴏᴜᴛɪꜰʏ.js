const { ʏᴏᴜᴛɪꜰʏɢᴇɴʀᴇ } = require("../🍏/ʏᴏᴜᴛɪꜰʏɢᴇɴʀᴇ.js");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");

module.exports.run = async (client, message, args, ᴅɪꜱᴄᴏʀᴅ) => {
  const Channel = message.member.voice.channel;
    if (!Channel) {
    message.channel.send("📕: error+code RED message").catch(console.error);
    message.react(`❌`);
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({
              dynamic: true,
            })
          ).setDescription(`${message.author}
\`Error\`
**Not connected to any Voice Channel yet!  Please Join first**`)
      )
      .catch(console.error);
    return;
  }
  const Queue = client.queue.get(message.guild.id);
  if (!Queue) {
    message.channel.send("📕: error+code RED message").catch(console.error);
    message.react(`❌`);
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({
              dynamic: true,
            })
          ).setDescription(`${message.author}
\`Error\`
**Nothing in Queue.\nPlease Add Some Songs By Using \` ${client.ʏᴏᴜꜰɪx}play \` or \` ${client.ʏᴏᴜꜰɪx}search \` Command!**`)
      )
      .catch(console.error);
    return;
  }

  const Embed = new ᴅɪꜱᴄᴏʀᴅ.MessageEmbed()
    .setColor("#8DB600")
    .setAuthor(
      "superspeed",
      message.author.avatarURL({
        dynamic: true,
      })
    )
    .setDescription(
      `superspeed Filter Has Been ${
        Queue.Filters["superspeed"]
          ? "Disabled (Song Maybe Backward)"
          : "Enabled (Song Maybe Ahead)"
      }!`
    )
    .setTimestamp();

  Queue.Filters["superspeed"] = !Queue.Filters["superspeed"];

  await ʏᴏᴜᴛɪꜰʏɢᴇɴʀᴇ(client, message, {
    Filter: true,
    Song: Queue.Songs[0],
  });

  return message.channel.send(Embed);
};

module.exports.help = {
  name: "superspeed",
  cooldown: 7000,
  category: "Filters",
  description: "Add/Remove superspeed Filter To/From Currently Playing Song!",
  usage: "superspeed",
  examples: ["superspeed"],
};
