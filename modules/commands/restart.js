module.exports.config = {
  name: "restart",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mirai",
  description: "Restart the Bot",
  commandCategory: "system",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function ({ api, args, Users, event }) {
  var mention = Object.keys(event.mentions)[0];
  let name = event.mentions[mention];
  var arraytag = [];
  arraytag.push({ id: mention });
  var a = function (a) { api.sendMessage(a, event.threadID); }
  a("𝐍𝐎𝐁𝐈𝐓𝐀-𝐁𝐎𝐓 𝐀𝐫𝐞 𝐑𝐞𝐬𝐭𝐚𝐫𝐭 𝐍𝐨𝐰...
🔥✅");
  setTimeout(() => { a({ body: "3.." }) }, 5000);
  setTimeout(() => { a({ body: "2.." }) }, 10000);
  setTimeout(() => { a({ body: "1.." }) }, 15000);
  setTimeout(() => { api.sendMessage("𝐍𝐎𝐁𝐈𝐓𝐀-𝐁𝐎𝐓 𝐀𝐫𝐞 𝐑𝐞𝐬𝐭𝐚𝐫𝐭 𝐍𝐨𝐰..✅🔥", event.threadID, () => process.exit(1)) }, 20000);
};
