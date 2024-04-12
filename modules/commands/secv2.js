/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "secv2",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "MR.SHAWON",
  description: "sex VEDIO",
  commandCategory: "secv2",
  usages: "secv2",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["-𝙎𝙃4𝙒𝙊𝙉 🤤🥵"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1Gs9NBEMyV3XKQvvBXZ4fzsZC4HdhyebL",
    "https://drive.google.com/uc?id=1GV2zKGbWqAhNlt1gB0CgCsMStICRYVOg",
    "https://drive.google.com/uc?id=1GmgYqyX_CDdzHMn8TbAT3lA_e5MFxwNb",
    "https://drive.google.com/uc?id=1GUlwnL7Kvb2OK_0M0GvvA97zjilLYy_L",
    "https://drive.google.com/uc?id=1xhOfN6xRY3CL2Ct8z6fflbq19F06utTm",
    "https://drive.google.com/uc?id=1GJDWrXWkZMQO9pVUuVnyzaNFeGncSs0Z",
    "https://drive.google.com/uc?id=1IVaGamIlXTkpm5WN9OG5xgVmbv_Z8aXL",
    "https://drive.google.com/uc?id=1I0-lVB0dOkRT4mZcEfMJHn7amk3tHtRp",
    "https://drive.google.com/uc?id=1FKMI1WFzZLvafar_-AiXVr4Q2L9SWTkJ",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
