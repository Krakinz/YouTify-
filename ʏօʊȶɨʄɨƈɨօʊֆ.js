const Os = require(`os`);
const Fs = require(`fs`);
const ᴄʜᴀʟᴋ = require(`chalk`);
const ᴘʀᴇᴛᴛʏ = require(`pretty-ms`);
const ᴅɪꜱᴄᴏʀᴅ = require(`./ʏօʊȶɨʄɨƈɨօʊֆ/ӄʀǟӄɨռʐʟǟɮ`);
const ᴄᴀʟᴍᴅᴏᴡɴ = new ᴅɪꜱᴄᴏʀᴅ.Collection();
const { MessageEmbed } = require("./ʏօʊȶɨʄɨƈɨօʊֆ/ӄʀǟӄɨռʐʟǟɮ");
const ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ = require(`soundcloud-scraper`);
const { ʏᴏᴜꜰɪx, ʏᴏᴜᴛᴏᴋᴇɴ } = require(`./ʏօʊȶɨʄɨƈɨօʊֆ/ʟᴏᴀᴅᴇʀ.js`);
const Client = new ᴅɪꜱᴄᴏʀᴅ.Client({ restTimeOffset: 10 });
(Client.commands = new ᴅɪꜱᴄᴏʀᴅ.Collection()),
  (Client.aliases = new ᴅɪꜱᴄᴏʀᴅ.Collection()),
  (Client.queue = new Map());
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
try {
  Client.login(ʏᴏᴜᴛᴏᴋᴇɴ);
} catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
  console.log(`Invalid YouTify Token Provided!`);
  console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
  exit(1);
}
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
Client.on(`ready`, async () => {
  console.log(`\n🍏YouTify™ by🔱KrakinzLab™️\n-----------`);
  console.log(ᴄʜᴀʟᴋ.red(`📕: error+code RED message`));
  console.log(ᴄʜᴀʟᴋ.yellow(`📙: sorry+code ORANGE message`));
  console.log(ᴄʜᴀʟᴋ.green(`📗: ok+code GREEN message`));
  console.log(ᴄʜᴀʟᴋ.blue(`📘: canceled status message`));
  console.log(`
🔱Bot-Name:~~> ${Client.user.username}
🔱Bot-Os:~~> ${Os.platform().toUpperCase()}
YouTify Is Ready- ${Client.user.username}
-----------\n🍏YouTify™ by🔱KrakinzLab™️`);
  Client.user.setActivity(`${ʏᴏᴜꜰɪx}help🍏${ʏᴏᴜꜰɪx}play`, {
    type: `WATCHING`,
  });
  const Key = await ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ.keygen();
  Client.ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ = new ꜱᴄᴏᴜɴᴅᴄʟᴏᴜᴅ.Client(Key);
});
Client.on(`error`, (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) => {
  console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
});
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
try {
  Client.on(`guildCreate`, (guild) => {
    const channel = guild.channels.cache.find(
      (channel) =>
        channel.type === `text` &&
        channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
    );
    channel.send(`@everyone`);
    channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#8DB600`)
          .setTitle(`\`\`\`🍏YouTify™\`\`\``)
          .setURL(`https://github.com/Krakinz?tab=repositories`)
          .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
          .setDescription(`❤️‍🔥 **\`\`\`\`Hey there MUSIC lovers !\`\`\`\`**
**I got you all covered with direct music streaming from ʏᴏᴜᴛᴜʙᴇ to discord voice channel.**
**Please use the channel \`🍏YouTify™\` for any \`🍏YouTify™\` commands.**
---------------:🍏:---------------

:candy:\`ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ\`
**${ʏᴏᴜꜰɪx}play | ${ʏᴏᴜꜰɪx}help to know more.**
---------------:🍏:----------------

**:star:\`ɴᴏᴛᴇ to @everyone\`**
**ᴀ channel ɴᴀᴍᴇ \`🍏YouTify™\` inside \`🔱Krakinz\` has been successfully created.**
**Please use 
**\`\`\`\` Channel: 🍏YouTify™ \`\`\`**
**For any \`🍏YouTify™\` commands.**`)
      )
      .catch(console.error);
    guild.channels
      .create(`🔱𝗞𝗥𝗔𝗞𝗜𝗡𝗭𝗟𝗔𝗕™`, {
        type: `category`,
        permissionOverwrites: [
          {
            id: guild.id,
            deny: [`VIEW_CHANNEL`],
          },
          {
            id: guild.id,
            allow: [`VIEW_CHANNEL`],
          },
        ],
      })
      .then((parent) => {
        guild.channels
          .create(`🍏youtify™`, {
            type: `text`,
            parent,
            permissionOverwrites: [
              {
                id: guild.id,
                deny: [
                  `MANAGE_ROLES`,
                  `MANAGE_NICKNAMES`,
                  `MANAGE_CHANNELS`,
                  `KICK_MEMBERS`,
                  `BAN_MEMBERS`,
                ],
              },
              {
                id: guild.id,
                allow: [
                  `VIEW_CHANNEL`,
                  `SEND_MESSAGES`,
                  `READ_MESSAGE_HISTORY`,
                ],
              },
            ],
          })
          .catch(console.error);
        return;
      });
  });
} catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
  console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
}
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
Client.on(`message`, async (message) => {
  try {
    if (message.author.bot || message.webhookID) {
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (message.content.startsWith(ʏᴏᴜꜰɪx + "test")) {
      message.channel
        .send("📙: sorry+code ORANGE message")
        .catch(console.error);
      message.react(`😔`);
      message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b66c00`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
          .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
          .setTitle(`\`\`\`🍏YouTify™ encountered an error.\`\`\``)
          .setDescription(`**\`Please report to either\`**
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In telegram group](https://t.me/Krakns)

**\`Error🔻Caught\`**
${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}`)
      );
      console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!message.content.startsWith(ʏᴏᴜꜰɪx)) {
      return;
    }
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    if (!message.guild) {
      message.react(`❌`);
      message.author.send("📕: error+code RED message").catch(console.error);
      message.reply(
        new MessageEmbed()
          .setTimestamp()
          .setColor(`#b60000`)
          .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
          .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
          .setURL(`https://github.com/Krakinz?tab=repositories`)
          .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
          .setFooter(
            "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
            message.author.avatarURL({
              dynamic: true,
            })
          ).setDescription(`\`User\`🍏${message.author}\n
**🍏\`YouTify™ by🔱KrakinzLab™️\`**
🔆- ᴅɪꜱᴄᴏʀᴅ \`Spotify+YouTube+Soundcloud\` Music bot built with ᴅɪꜱᴄᴏʀᴅ.js.

⚠️**\`Error\`**
• You are currently in a \`DMChannel\` and so you have been \`restricted\` using any \`🍏YouTify™ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀\`
• Add me in your channel and then all commands will be automatically accepted.

🔰**\`Invite\`**
[🍏YouTify™](https://discord.com/api/oauth2/authorize?client_id=895346909785489429&permissions=8&scope=bot%20applications.commands)`)
      );
      return;
    }
    if (
      message.content.startsWith(ʏᴏᴜꜰɪx) &&
      message.channel.name !== `🍏youtify™`
    ) {
      message.channel.send("📕: error+code RED message").catch(console.error);
      message.react(`❌`);
      message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor(`#b60000`)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setURL(`https://github.com/Krakinz?tab=repositories`)
            .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
            .setFooter(
              "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
              message.author.avatarURL({
                dynamic: true,
              })
            )
            .setDescription(
              `${message.author}
Please use
\`\`\`\` Channel: 🍏YouTify™ \`\`\`
For any \`🍏YouTify™\` commands.`
            )
        )
        .catch(console.error);
      return;
    }
    let Arguments = await message.content
      .slice(ʏᴏᴜꜰɪx.length)
      .trim()
      .split(/ +/g),
      Command = await Arguments.shift().toLowerCase();
    Command =
      (await Client.commands.get(Command)) ||
      (await Client.commands.get(Client.aliases.get(Command)));
    if (!Arguments || !Command) {
      return;
    }
    try {
      if (!ᴄᴀʟᴍᴅᴏᴡɴ.has(Command.help.name))
        await ᴄᴀʟᴍᴅᴏᴡɴ.set(Command.help.name, new ᴅɪꜱᴄᴏʀᴅ.Collection());
      const Timestamps = ᴄᴀʟᴍᴅᴏᴡɴ.get(Command.help.name),
        CoolDown = parseInt(Command.help.cooldown || 1000),
        Now = Date.now();
      if (Timestamps.has(message.author.id)) {
        const ExpireTime = Timestamps.get(message.author.id) + CoolDown;
        if (Now < ExpireTime) {
          message.channel
            .send("📕: error+code RED message")
            .catch(console.error);
          message.react(`❌`);
          return message.channel.send(
            new MessageEmbed()
              .setTimestamp()
              .setColor(`#b60000`)
              .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
              .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
              .setURL(`https://github.com/Krakinz?tab=repositories`)
              .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
              .setFooter(
                "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
                message.author.avatarURL({
                  dynamic: true,
                })
              )
              .setDescription(
                `
**Slow Down and Wait** *${ᴘʀᴇᴛᴛʏ(ExpireTime - Now, {
                  verbose: true,
                  secondsDecimalDigits: 0,
                })}*  **Before Using** *${ʏᴏᴜꜰɪx +
                Command.help.name.charAt(0).toLowerCase() +
                Command.help.name.slice(1)
                }* **Command Again**`
              )
          );
        }
      }
      Timestamps.set(message.author.id, Now);
      Client.ʏᴏᴜꜰɪx = ʏᴏᴜꜰɪx;
      await Command.run(Client, message, Arguments, ᴅɪꜱᴄᴏʀᴅ);
      await setTimeout(() => Timestamps.delete(message.author.id), CoolDown);
    } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
      message.channel
        .send(
          new MessageEmbed()
            .setColor(`#8DB600`)
            .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
            .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
            .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
            .setFooter(
              "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
              message.author.avatarURL({
                dynamic: true,
              })
            ).setDescription(`**Ugh!** 
*Something Went wrong!*
**Please try again later or check the error message.** 


\`Error report:\`
*${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
        )
        .then(() => console.log(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ));
      return;
    }
  } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
    //     message.Client.channel.cache
    //       .get(`894958787792871475`)
    //       .send(
    //         new MessageEmbed()
    //           .setColor(`#b66c00`)
    //           .setTitle(`⚠️\`\`\` ᴡᴀʀɴɪɴɢ! \`\`\` `)
    //           .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
    //           .setImage(
    //             `https://i.postimg.cc/zvkxwMth/YouTify.jpg`
    //           )
    //           .setThumbnail(
    //             `https://i.postimg.cc/zvkxwMth/YouTify.jpg`
    //           )
    //           .setFooter(
    //             "🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️",
    //             message.author.avatarURL({
    //               dynamic: true,
    //             })
    //           ).setDescription(`
    // **Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**

    // **Error report:**
    // *${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}*`)
    //       )
    //       .catch(console.error);
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    `|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
    // ====================================================—••÷[🍏YouTify™]÷••—====================================================
    message.channel
      .send("📙: sorry+code ORANGE message")
      .catch(console.error);
    message.react(`😔`);
    message.channel.send(
      new MessageEmbed()
        .setTimestamp()
        .setColor(`#b66c00`)
        .setAuthor(`🍏YouTify™ by KrakinzLab™️`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
        .setThumbnail(`https://i.postimg.cc/zvkxwMth/YouTify.jpg`)
        .setTitle(`\`\`\`🍏YouTify™ encountered an error.\`\`\``)
        .setDescription(`**\`Please report to either\`**
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In telegram group](https://t.me/Krakns)

**\`Error🔻Caught\`**
${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}`)
    );
    console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
  }
});
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                   |<`;
// ====================================================—••÷[🍏YouTify™]÷••—====================================================
const YouTify_Catelog = [`Home`, `YouTify`, `Filters`];
YouTify_Catelog.forEach((ʏᴏᴜᴛɪꜰʏᴄᴀᴛᴇɢᴏʀʏ) => {
  Fs.readdir(
    `./ʏօʊȶɨʄɨƈɨօʊֆ/${ʏᴏᴜᴛɪꜰʏᴄᴀᴛᴇɢᴏʀʏ}`,
    (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ, ʏᴏᴜᴛɪꜰʏꜰɪʟᴇꜱ) => {
      if (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) throw ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ;
      ʏᴏᴜᴛɪꜰʏꜰɪʟᴇꜱ.forEach((File) => {
        if (!File.endsWith(`🍏ʏᴏᴜᴛɪꜰʏ.js`)) {
          return;
        }
        const ʏօʊȶɨʄʏƈօʍʍֆ = require(`./ʏօʊȶɨʄɨƈɨօʊֆ/${ʏᴏᴜᴛɪꜰʏᴄᴀᴛᴇɢᴏʀʏ}/${File}`);
        if (!ʏօʊȶɨʄʏƈօʍʍֆ.help.name) {
          console.log(`---------------------`);
          console.log(
            ᴄʜᴀʟᴋ.red`>❌ | ${ʏօʊȶɨʄʏƈօʍʍֆ.help.name ? ʏօʊȶɨʄʏƈօʍʍֆ.help.name : `?`
              }`
          );
          return;
        }
        Client.commands.set(ʏօʊȶɨʄʏƈօʍʍֆ.help.name, ʏօʊȶɨʄʏƈօʍʍֆ);
        ʏօʊȶɨʄʏƈօʍʍֆ.help.aliases
          ? ʏօʊȶɨʄʏƈօʍʍֆ.help.aliases.forEach((Alias) =>
            Client.aliases.set(Alias, ʏօʊȶɨʄʏƈօʍʍֆ.help.name)
          )
          : (ʏօʊȶɨʄʏƈօʍʍֆ.help.aliases = null);
        console.log(`---------------------`);
        console.log(ᴄʜᴀʟᴋ.green`>🟢 | ${ʏօʊȶɨʄʏƈօʍʍֆ.help.name.toUpperCase()}`);
      });
    }
  );
});
