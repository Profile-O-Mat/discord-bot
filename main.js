const discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function(message){
  console.log(message.content);
});

bot.login(Token.getClientToken());
