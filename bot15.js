const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "505712949219033109"; // ايدي السررفر
var channel = "505736676086382612";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** فرعونفؤعونفؤعونفؤعونفؤعونفؤعونفرعونفؤعونفؤعونفؤعونفؤعونفرعونفرعونفرعونفؤعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفؤعونفؤعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفؤعونفرعونفرعونفؤعونفرعونفرعونفؤعونفؤعونفؤعونفؤعونفؤعونفؤعونفرعونفرعونفرعونفرعونفرعونفؤعونفرعونفرعونفرعومفرعون **')
    },305);
})



client.on('ready', async() => {
var server = "505712949219033109"; // ايدي السررفر
var channel = "505736676086382612";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('ready', async() => {
var server = "505712949219033109"; // ايدي السررفر
var channel = "505736676086382612";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep <@314135031029170197>')
    },8.64e+7);
})


client.on('message', message => {
if(message.content.startsWith('15s')) {
if(message.author.id !== "420637382644072451") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 





client.login(process.env.BOT_TOKEN15); 
