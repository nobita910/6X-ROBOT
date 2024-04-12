module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "SHAWON",
  description: "Notify bots or people entering the group",
  dependencies: {
    "fs-extra": ""
  }
};
module.exports.run = async function({ api, event }) {

  const request = require("request");
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`【.】${global.config.BOTNAME} |.𝐱𝐚𝐧`, threadID, api.getCurrentUserID());
    return api.sendMessage(`✰━━━━━━━━━━━━━✰\n🤖 𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐉𝐨𝐢𝐧𝐢𝐧𝐠 𝐌𝐞  ✅\n \n✨𝐍𝐎𝐁𝐈𝐓𝐀-𝐑𝐎𝐁𝐎𝐓✨\n \n𝐌𝐲 𝐁𝐎𝐒𝐒 𝐈𝐒 𝐒𝐇𝐀𝐖𝐎𝐍\n \n📝𝐓𝐡𝐢𝐬 𝐢𝐬 𝐌𝐲 𝐏𝐫𝐞𝐟𝐢𝐱 : 【 ${global.config.PREFIX} 】\n \n𝐒𝐞𝐞 𝐀𝐥𝐥 𝐓𝐡𝐞  𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐁𝐲 𝐖𝐫𝐢𝐭𝐢𝐧𝐠 ${global.config.PREFIX}𝐡𝐞𝐥𝐩 📝\n \n𝐖𝐞 𝐔𝐬𝐞 𝐀𝐧𝐝 𝐓𝐞𝐚𝐜𝐡📝\n \n𝐈 𝐰𝐢𝐥𝐥 𝐟𝐥𝐢𝐫𝐭 𝐰𝐢𝐭𝐡 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐚𝐧𝐝 𝐍𝐨 𝐨𝐧𝐞 𝐰𝐢𝐥𝐥 𝐌𝐢𝐧𝐝⏳🗿⌛\n \n𝐄𝐧𝐣𝐨𝐲 𝐔𝐬𝐢𝐧𝐠 𝐌𝐞🚀\n \n𝐈𝐅 𝐓𝐡𝐞𝐫𝐞 𝐢𝐬 𝐀𝐧𝐲 𝐏𝐫𝐨𝐛𝐥𝐞𝐦 𝐓𝐞𝐥𝐥 𝐒𝐇𝐀𝐖𝐎𝐍 𝐁𝐎𝐒𝐒 𝐓𝐨 𝐇𝐢𝐦🌈\n \n𝐍𝐨 𝐎𝐧𝐞 𝐖𝐢𝐥𝐥 𝐛𝐞 𝐇𝐮𝐫𝐭 𝐁𝐲 𝐌𝐲 𝐖𝐨𝐫𝐝𝐬, 𝐉𝐮𝐬𝐭 𝐒𝐚𝐲 𝐖𝐡𝐚𝐭 𝐈 𝐓𝐞𝐚𝐜𝐡🖇💻\n \n𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠 𝐦𝐞 📝 🌈\n✰━━━━━━━━━━━━━✰`, threadID);
  }
  else {
    try {
    const request = require("request");
      const fs = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);

      const threadData = global.data.threadData.get(parseInt(threadID)) || {};

      var mentions = [], nameArray = [], memLength = [], i = 0;

    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  

        nameArray.push(userName);
        mentions.push({ tag: userName, id: userID, fromIndex: 0 });

        memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "Hello {uName}\nWelcome to\n{threadName}\nyou're the {soThanhVien}th member on this group please enjoy" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{uName}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);			

      var link = [
"https://i.imgur.com/pa2ZWhB.jpg",
"https://i.imgur.com/VaA0N6G.jpg",
"https://i.imgur.com/E49ptBn.jpg",
"https://i.imgur.com/VAYWAoS.jpg",
      ];
        var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
            }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
  }
        }
