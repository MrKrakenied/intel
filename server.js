const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", (message) => {
	if(message.content.toLowerCase().includes("intel")) {
		message.react("id reakcji");
	}
});
 
client.login("token bota");
