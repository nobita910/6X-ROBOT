module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SALMAN",
  description: "bot admin mention",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100011726342894") {
    var aid = ["100011726342894"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["এতো মেনশন দিও না আমার বস বিজি আছে..!!😒", "শাওন বসকে এতো মেনশন না দিয়ে একটা gf দাও ঝাং..!!😥", "বস একটু কাজ করতাছে সে বিজি মানুষ..!!😪","শাওন বস এখন কাজ করতাছে পরে নক দিও বাবু😘","বস নাই কি বলবা আমাকে বলতে পারো.!!😒"," কিহ হয়েছে বার বার এতো মেনশন দিচ্ছো প্রেম করবা নাকি 😒",];
      api.setMessageReaction("💐", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                             }
