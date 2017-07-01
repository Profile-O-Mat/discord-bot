const discord = require("discord.js");
const bot = new discord.Client();
const token = require("./token.js");

bot.on("ready", function(){
  console.log("Ready");
});
bot.on("message", function(message){
  if(message.author.equals(bot.user)) return;
  if(!message.content.startsWith("!profile")) return;
  var content = message.content.split(" ");

  if(content.length == 2){
    var profile = content[1];
    console.log(profile);
    message.channel.send("Getting Data for "+ profile+"...");
  }
});

bot.login(token.TOKEN);
