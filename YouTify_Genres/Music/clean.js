const { YouTify_Singer } = require("../../YouTifyPlayer/YouTify_Singer.js");
const { MessageEmbed } = require("../../YouTifyPlayer/YouTified.djs");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
  const Channel = message.member.voice.channel;
  if (!Channel) {
    try {
      message.react("🟡");
      message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬Clean\``)
            .setAuthor(
              `🍏YouTify™`,
              `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
            )
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(
              `👈🏽‍Reqstd by ${message.author.username}`,
              message.author.avatarURL({ dynamic: true })
            )
            .addField(
              `\`☣️Error\``,
              `Not connected to any VoiceChannel!`,
              true
            )
        )
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      message.client.channels.cache
        .get(`896660877091164180`)
        .send(
          new MessageEmbed()
            .setColor(`#b66c00`)
            // .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setImage(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(
              "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
              message.author.avatarURL({ dynamic: true })
            ).setDescription(`
Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.
Error report:
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
        )
        .catch(console.error);
      // ====================================================—••÷[🍏YouTify™]÷••—====================================================
      message.channel.send("📙: sorry+code ORANGE message").catch(console.error);
      message.react(`😔`);
      message.channel.send(
        // .setTitle(`\`\`\`🍏YouTify™ encountered an error.\`\`\``)
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b66c00`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setDescription(`\`Please report to either\`
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

\`Error🔻Caught and Auto Sent to Dev Server!\`
${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}`)
      );
      console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
    }
    return;
  }
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  let Queue = await client.queue.get(message.guild.id),
    Connection;
  if (!Queue) {
    try {
      message.react("🟡");
      message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬Clean\``)
            .setAuthor(
              `🍏YouTify™`,
              `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
            )
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(
              `👈🏽‍Reqstd by ${message.author.username}`,
              message.author.avatarURL({ dynamic: true })
            )
            .addField(
              `\`☣️Error\``,
              `No song in Queue, Please Add Some Songs By Using  ${client.YouTix}play or  ${client.YouTix}search Command!`,
              true
            )
        )
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      message.client.channels.cache
        .get(`896660877091164180`)
        .send(
          new MessageEmbed()
            .setColor(`#b66c00`)
            // .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setImage(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(
              "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
              message.author.avatarURL({ dynamic: true })
            ).setDescription(`
Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.
Error report:
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
        )
        .catch(console.error);
      // ====================================================—••÷[🍏YouTify™]÷••—====================================================
      message.channel.send("📙: sorry+code ORANGE message").catch(console.error);
      message.react(`😔`);
      message.channel.send(
        // .setTitle(`\`\`\`🍏YouTify™ encountered an error.\`\`\``)
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b66c00`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setDescription(`\`Please report to either\`
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

\`Error🔻Caught and Auto Sent to Dev Server!\`
${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}`)
      );
      console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
    }
    return;
  }
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  if (Queue.Voice.id != Channel.id) {
    try {
      message.react("🟡");
      message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor("#c4b932")
            .setTitle(`\`💬Clean\``)
            .setAuthor(
              `🍏YouTify™`,
              `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
            )
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(
              `👈🏽‍Reqstd by ${message.author.username}`,
              message.author.avatarURL({ dynamic: true })
            )
            .addField(
              `\`☣️Error\``,
              `You Need To Join the Same Voice Channel where YouTify™ is playing Music!`,
              true
            )
        )
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      message.client.channels.cache
        .get(`896660877091164180`)
        .send(
          new MessageEmbed()
            .setColor(`#b66c00`)
            // .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setImage(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(
              "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
              message.author.avatarURL({ dynamic: true })
            ).setDescription(`
Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.
Error report:
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
        )
        .catch(console.error);
      // ====================================================—••÷[🍏YouTify™]÷••—====================================================
      message.channel.send("📙: sorry+code ORANGE message").catch(console.error);
      message.react(`😔`);
      message.channel.send(
        // .setTitle(`\`\`\`🍏YouTify™ encountered an error.\`\`\``)
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b66c00`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setDescription(`\`Please report to either\`
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

\`Error🔻Caught and Auto Sent to Dev Server!\`
${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}`)
      );
      console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
    }
    return;
  }
  // ===========================================================================================================================
  // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
  // ===========================================================================================================================
  try {
    const Wait = await message.channel.send("Cleaning...");
    await message.guild.voice.kick(), await client.queue.delete(message.guild.id);
    await Wait.edit("Configuring...");
    Wait.edit("Re-Configuring...");
    setTimeout(async () => {
      try {
        Connection = await Channel.join();
        await Connection.voice.setSelfDeaf(true);
        Queue["Connection"] = Connection;
      } catch (e) {
        console.log(e);
        return Wait.edit(
          "Re-Configuration Process Failed - Unable To Join Voice Channel!"
        );
      }
      await Wait.edit(
        "Re-Configuration Process Success - Joined The Voice Channel"
      );
      await client.queue.set(message.guild.id, Queue);
      try {
        await YouTify_Singer(client, message, { Song: Queue.Songs[0] });
      } catch (e) {
        console.log(e);
        return Wait.edit(
          `Re-Configuration Process Failed - YouTify Error *${e}*`
        );
      }
      await Wait.edit(
        "Re-Configuration Process Success - YouTify Playing!"
      ).then((M) => M.delete({ timeout: 3000 }));
      return message.react("✅");
    }, 3000);
  } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
    message.client.channels.cache
      .get(`896660877091164180`)
      .send(
        new MessageEmbed()
          .setColor(`#b66c00`)
          // .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setImage(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({ dynamic: true })
          ).setDescription(`
Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.
Error report:
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
      )
      .catch(console.error);
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    message.channel.send("📙: sorry+code ORANGE message").catch(console.error);
    message.react(`😔`);
    message.channel.send(
      // .setTitle(`\`\`\`🍏YouTify™ encountered an error.\`\`\``)
      new MessageEmbed()
        .setTimestamp()
        .setColor(`#b66c00`)
        .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
        .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
        .setDescription(`\`Please report to either\`
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

\`Error🔻Caught and Auto Sent to Dev Server!\`
${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}`)
    );
    console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
  }
};

module.exports.help = {
  name: "clean",
  aliases: ["cn"],
  cooldown: 10000,
  category: "Music",
  description: "Make Music More Clear!",
  usage: "Clean",
  examples: ["clean"],
};
