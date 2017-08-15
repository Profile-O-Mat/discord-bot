const discord = require("discord.js");
const bot = new discord.Client();
const token = require("./token.js");
var request = require('request');

bot.on("ready", function(){
  console.log("Ready");
});

bot.on("message", function(message){
  if(message.author.equals(bot.user)) return;
  if(!message.content.startsWith("!profile")) return;
  var content = message.content.split(" ");

  if(content.length == 2){
    var profile = content[1];
    message.channel.send("Predicting **"+ profile+"**...");
    request('https://profile-o-mat.de:8080/predict?user='+profile, function (error, response, body) {
      var result = JSON.parse(body);
      var resultData = result.data;
      var s = "Predictions for **"+profile+"**:\n```css";
      for (var key in resultData) {
        var resultInt = parseInt(resultData[key] * 100);
        s += "\n["+key+"]: "+resultInt+"%";
      }
      s+="```";
      message.channel.send(s)
    });
    }
  });

bot.login(token.TOKEN);
