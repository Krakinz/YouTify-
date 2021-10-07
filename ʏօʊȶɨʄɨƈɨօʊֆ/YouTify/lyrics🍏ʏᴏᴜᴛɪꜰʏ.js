const Finder = require("lyrics-finder");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ");
const ᴅɪꜱᴄᴏʀᴅ = require(`../ӄʀǟӄɨռʐʟǟɮ`);

module.exports.run = async (client, message, args) => {
  const Queue = client.queue.get(message.guild.id);
  if (!Queue && !args[0])
    return message.channel.send(
      "Error: No Queue, Please Add Some Songs By Using Play & Search Command!"
    );
  let Lyric,
    Thing = Queue ? Queue.Songs[0].Title : args.join(" "),
    NoSong = false;

  try {
    Lyric = await Finder(Thing, "");
    if (!Lyric && Queue && args[0]) {
      Lyric = await Finder(args.join(" "));
      NoSong = true;
    }
    if (!Lyric)
      return message.channel.send(
        `No Lyrics Found - ${NoSong ? args.join(" ") : Thing}`
      );
  } catch (ʏᴏᴜᴛɪꜰʏᴇʀʀᴏʀ) {
    return message.channel.send(`No Lyrics Found - ${Thing}`);
  }

  Lyric = await Lyric.replace(/(.{2021})/g, "\n1\n");
  message.react("✅");
  message.channel.send("📗: ok+code GREEN message").catch(console.error);
  return message.channel.send(Lyric, {
    split: {
      char: "\n",
    },
  });
};

module.exports.help = {
  name: "lyrics",
  aliases: ["lyric", "ly"],
  cooldown: 7000,
  category: "YouTify",
  description: "Show Song Lyrics",
  usage: "Lyrics | <Title>",
  examples: [
    "lyrics",
    "lyrics we don't talk anymore",
    "lyrics shape of you",
    "lyrics despacito",
  ],
};
