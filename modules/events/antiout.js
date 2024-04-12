module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "SALMAN CHOWDHURY",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`ওই ${name} লিভ নিও না 🥺..আমাকে ছেড়ে কোথাই যাও🥺🥺add দিমু আবার☺️🥀 লিভ নিও না প্লিজ আমার সাথে কথা বলো..!!😘🍼`, event.threadID)
   } else api.sendMessage(`ওই ${name} লিভ নিও না 🥺\n\nআমাকে ছেড়ে কোথাই যাও🥺🥺\n\nadd দিমু আবার☺️🥀 লিভ নিও না প্লিজ\n\nআমার সাথে কথা বলো..!!😘🍼`, event.threadID);
  })
 }
       }
