console.clear();
const Fs = require("fs");
const Os = require(`os`);
const ᴄʜᴀʟᴋ = require("chalk");
const Ms = require("pretty-ms");
require("dotenv").config();
const Token = process.env.Token;
const YouTix = process.env.YouTix;
const Discord = require("discord.js"),
  Client = new Discord.Client({ restTimeOffset: 10 }),
  CoolDowns = new Discord.Collection(),
  SC = require("soundcloud-scraper");
(Client.commands = new Discord.Collection()),
  (Client.aliases = new Discord.Collection()),
  (Client.queue = new Map());
const { MessageEmbed } = require("discord.js");
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
const Categories = ["Music", "Filters", "System"];
Categories.forEach((Category) => {
  Fs.readdir(`./YouTify_Genres/${Category}`, (error, Files) => {
    if (error) throw error;
    Files.forEach((File) => {
      if (!File.endsWith(".js")) return;
      const Cmd = require(`./YouTify_Genres/${Category}/${File}`);
      if (!Cmd.help.name || !Cmd.help.aliases) {
        console.log(
          ᴄʜᴀʟᴋ.yellow("❓ YouTify's ❓ |"),
          ᴄʜᴀʟᴋ.cyan(`${Cmd.help.name ? Cmd.help.name : "?"}`),
          ᴄʜᴀʟᴋ.red(` :( Failed To Load - ❌\n---------------------------`)
        );
        return;
      }
      Client.commands.set(Cmd.help.name, Cmd);
      Cmd.help.aliases
        ? Cmd.help.aliases.forEach((Alias) =>
            Client.aliases.set(Alias, Cmd.help.name)
          )
        : (Cmd.help.aliases = null);
      ComUp = Cmd.help.name.toUpperCase();
      console.log(
        ᴄʜᴀʟᴋ.yellow("⚡ YouTify's ⚡ |"),
        ᴄʜᴀʟᴋ.cyan(`${ComUp}`),
        ᴄʜᴀʟᴋ.green(`;) Command has been loaded!`)
      );
    });
  });
});
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
Client.on("ready", async () => {
  console.log(ᴄʜᴀʟᴋ.red(`📕: error+code RED message`));
  console.log(ᴄʜᴀʟᴋ.yellow(`📙: sorry+code ORANGE message`));
  console.log(ᴄʜᴀʟᴋ.green(`📗: ok+code GREEN message`));
  console.log(ᴄʜᴀʟᴋ.blue(`📘: canceled status message`));
  console.log(ᴄʜᴀʟᴋ.yellow("==========================="));
  console.log(
    `🔱 | Bot-Name=> ${
      Client.user.username
    }!\n🔱 | Bot-Os=> ${Os.platform().toUpperCase()}!\n🔱 | Ready on=> ${
      Client.guilds.cache.size
    } servers!\n🔱 | Total Users=> ${Client.users.cache.size} users!`
  );
  Client.user.setActivity(`${YouTix}help🍏${YouTix}play`, { type: `WATCHING` });
  console.log(ᴄʜᴀʟᴋ.yellow("==========================="));
  const Key = await SC.keygen();
  Client.SC = new SC.Client(Key);
});
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
Client.on("guildCreate", (guild) => {
  let Days = Math.floor(Client.uptime / 86400000),
    Hours = Math.floor(Client.uptime / 3600000) % 24,
    Minutes = Math.floor(Client.uptime / 60000) % 60,
    Seconds = Math.floor(Client.uptime / 1000) % 60;
  const RemoveUseless = (Duration) => {
    return Duration.replace("0 Day\n", "")
      .replace("0 Hour\n", "")
      .replace("0 Minute\n", "");
  };
  let Total = RemoveUseless(
    `${Days} ${Days > 1 ? "Days" : "Day"}\n${Hours} ${
      Hours > 1 ? "Hours" : "Hour"
    }\n${Minutes} ${Minutes > 1 ? "Minutes" : "Minute"}\n${Seconds} ${
      Seconds > 1 ? "Seconds" : "Second"
    }`
  );
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
        .setColor(`#43745a`)
        // .setTitle(`\`\`\`🍏YouTify™\`\`\``)
        .setURL("https://github.com/Krakinz")
        .setImage(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
        .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
        .setAuthor(
          `🍏YouTify™`,
          `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
        )
        .setDescription(
          `\`🎶ΉΣY ƬΉΣЯΣ MЦƧIC LӨVΣЯƧ🎶\`
---------------::---------------\n
❤️𝘐 𝘨𝘰𝘵 𝘺𝘰𝘶 𝘤𝘰𝘷𝘦𝘳𝘦𝘥 𝘸𝘪𝘵𝘩 𝘥𝘪𝘳𝘦𝘤𝘵 𝘔𝘶𝘴𝘪𝘤 𝘚𝘳𝘦𝘢𝘮𝘪𝘯𝘨 𝘵𝘰 𝘥𝘪𝘴𝘤𝘰𝘳𝘥 𝘷𝘰𝘪𝘤𝘦 𝘤𝘩𝘢𝘯𝘯𝘦𝘭.🔥
**🍏YouTify™** 𝘪𝘴 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 YouTube+SoundCloud+Spotify 𝘔𝘶𝘴𝘪𝘤 𝘉𝘰𝘵 𝘣𝘶𝘪𝘭𝘵 𝘸𝘪𝘵𝘩 𝘋𝘪𝘴𝘤𝘰𝘳𝘥.𝘫𝘴 𝘢𝘯𝘥 𝘩𝘢𝘴 20+ Audio Filters Pre-Built.

❓❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘪𝘴 𝘪𝘯 𝘩𝘦𝘢𝘷𝘺 𝘣𝘦𝘵𝘢 𝘴𝘵𝘢𝘨𝘦❓❓
---------------::--------------`
        )
        .addField(
          `:candy:\`YouTify Main Commands\``,
          `**${Client.YouTix}play & ${Client.YouTix}help to know more...**`,
          true
        )
        .addField(
          `:star:\`\`Note to\`\`@everyone`,
          `ᴀ channel ɴᴀᴍᴇ \`🍏YouTify™\` inside \`🔱Krakinz\` has been successfully created.
Please use \` Channel: 🍏YouTify™ \` For any \`🍏YouTify™\` commands.`,
          true
        )
        .addField(
          `\`Brought To You by\``,
          "👑**Krakinz & KrakinzLab(c)**👑",
          true
        )
        .addField(
          `\`🛸Uptime\``,
          `🤖**YouTify™ is Smoothly Serving since ${Total}**`,
          true
        )
        .addField(
          `\`📡Ping\``,
          `🤖**YouTify's Server is Smoothly Running with Max Latency being ${Client.ws.ping}ms**`,
          true
        )
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
        .create(`🍏ʏᴏᴜᴛɪꜰʏ™`, {
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
              allow: [`VIEW_CHANNEL`, `SEND_MESSAGES`, `READ_MESSAGE_HISTORY`],
            },
          ],
        })
        .catch(console.error);
      return;
    });
});
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
Client.on("message", async (message) => {
  try {
    if (message.author.bot) {
      return;
    }
    if (message.webhookID) {
      return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
    if (!message.guild) {
      await message.react("🔴");
      await message.channel.send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#b13d3d")
          // .setTitle(`\`\`\`🍏YouTify™\`\`\``)
          .setURL("https://github.com/Krakinz")
          .setImage(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
          .setFooter(
            `👈🏽‍Reqstd by`,
            message.author.avatarURL({ dynamic: true })
          ).setDescription(`\`User\`🍏${message.author}\n
---------------::---------------
❤️𝘐 𝘨𝘰𝘵 𝘺𝘰𝘶 𝘤𝘰𝘷𝘦𝘳𝘦𝘥 𝘸𝘪𝘵𝘩 𝘥𝘪𝘳𝘦𝘤𝘵 𝘔𝘶𝘴𝘪𝘤 𝘚𝘳𝘦𝘢𝘮𝘪𝘯𝘨 𝘵𝘰 𝘥𝘪𝘴𝘤𝘰𝘳𝘥 𝘷𝘰𝘪𝘤𝘦 𝘤𝘩𝘢𝘯𝘯𝘦𝘭.🔥
**🍏YouTify™** 𝘪𝘴 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 YouTube+SoundCloud+Spotify 𝘔𝘶𝘴𝘪𝘤 𝘉𝘰𝘵 𝘣𝘶𝘪𝘭𝘵 𝘸𝘪𝘵𝘩 𝘋𝘪𝘴𝘤𝘰𝘳𝘥.𝘫𝘴 𝘢𝘯𝘥 𝘩𝘢𝘴 20+ Audio Filters Pre-Built.

❓❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘪𝘴 𝘪𝘯 𝘩𝘦𝘢𝘷𝘺 𝘣𝘦𝘵𝘢 𝘴𝘵𝘢𝘨𝘦❓❓
---------------::-------------

⚠️**\`Error\`**
• You are currently in a \`DMChannel\` and so you have been \`restricted\` using any \`🍏YouTify™ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀\`
• Add me in your channel and then all commands will be automatically accepted.

🔰**\`Invite\`**
[🍏YouTify™](https://discord.com/api/oauth2/authorize?client_id=895346909785489429&permissions=8&scope=bot%20applications.commands)`)
      );
      return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
    if (
      message.content.startsWith(YouTix) &&
      message.channel.name !== `🍏ʏᴏᴜᴛɪꜰʏ™`
    ) {
      await message.react("🔴");
      await message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor("#b13d3d")
            // .setTitle(`\`💬Play\``)
            .setAuthor(
              `🍏YouTify™`,
              `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
            )
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(
              `👈🏽‍Reqstd by`,
              message.author.avatarURL({ dynamic: true })
            )
            .addField(
              `\`☣️Error\``,
              `**Please use \` Channel: 🍏YouTify™ \` For any \`🍏YouTify™\` commands.**`,
              true
            )
        )
        .catch(console.error);
      return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
    if (!message.content.startsWith(YouTix)) return;
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
    let Arguments = message.content.slice(YouTix.length).trim().split(/ +/g);
    let Command = Arguments.shift().toLowerCase();
    Command =
      (await Client.commands.get(Command)) ||
      (await Client.commands.get(Client.aliases.get(Command)));
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
    if (!Arguments || !Command) return;
    try {
      if (!CoolDowns.has(Command.help.name))
        await CoolDowns.set(Command.help.name, new Discord.Collection());
      const Timestamps = CoolDowns.get(Command.help.name),
        CoolDown = parseInt(Command.help.cooldown || 1000),
        Now = Date.now();
      if (Timestamps.has(message.author.id)) {
        const ExpireTime = Timestamps.get(message.author.id) + CoolDown;
        if (Now < ExpireTime) {
          await message.react("🔴");
          await message.channel
            .send(
              new MessageEmbed()
                .setTimestamp()
                .setColor("#b13d3d")
                // .setTitle(`\`💬Slow Down\``)
                .setAuthor(
                  `🍏YouTify™`,
                  `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
                )
                .setURL("https://github.com/Krakinz")
                .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
                .addField(
                  `\`💤Calm Down\``,
                  `Please Wait **${Ms(ExpireTime - Now, {
                    verbose: true,
                    secondsDecimalDigits: 0,
                  })}** Before Using ${
                    Command.help.name.charAt(0).toUpperCase() +
                    Command.help.name.slice(1)
                  } Command Again`
                )
            )
            .catch(console.error);
          return;
        }
      }
      Timestamps.set(message.author.id, Now);
      Client.YouTix = YouTix;
      await Command.run(Client, message, Arguments, Discord);
      setTimeout(() => Timestamps.delete(message.author.id), CoolDown);
      // ===========================================================================================================================
      // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
      // ===========================================================================================================================
    } catch (error) {
      await message.react("🔴");
      await message.channel
        .send(
          new MessageEmbed()
            .setTimestamp()
            .setColor("#b13d3d")
            .setAuthor(
              `🍏YouTify™`,
              `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
            )
            .setURL("https://github.com/Krakinz")
            .setThumbnail(`https://i.postimg.cc/9f0mS5NY/YouTify.png`)
            .setFooter(
              `👈🏽‍Reqstd by`,
              message.author.avatarURL({ dynamic: true })
            )
            .addField(
              `\`☣️Error\``,
              `**Something Went Wrong, Try Again Later!**\n\n*${error}*`,
              true
            )
        )
        .catch(console.error);
      return;
    }
    // ===========================================================================================================================
    // 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
    // ===========================================================================================================================
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
**Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**
**Error report:**
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
        .setDescription(`**\`Please report to either\`**
🔰[In ᴅɪꜱᴄᴏʀᴅ channel](https://discord.gg/y2PtYAJgpy)
🔰[In ᴛᴇʟᴇɢʀᴀᴍ group](https://t.me/Krakns)

**\`Error🔻Caught and Auto Sent to Dev Server!\`**
${ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ}`)
    );
    console.error(ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ);
  }
});
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
Client.login(Token).catch((error) => console.log(new Error(error)));
Client.on("error", (error) => {
  console.log(error);
});
