const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = '-';
//Ping
client.on('message', (message) => {
    if(message.content.toLowerCase() == `${prefix}ping`) {

        message.channel.send('```' + `My ping is ${(client.ws.ping)}ms` + '```')
    }
})

client.on('ready', () => {
    console.log(`${client.user.tag} is Online and ready to go`)
    client.user.setUsername("2Cool4Skool")
 

    
    
})


//Commands
client.on('message', (message) => {
    if(message.content.toLowerCase() == `${prefix}admin`) {
        let myRole = message.guild.roles.cache.get("777292149967814666")
        message.member.roles.add(myRole);
    }
})












client.login(process.env.Tokens);






