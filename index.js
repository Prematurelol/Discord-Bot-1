const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const {prefix, token, verison, isbot} = require('./config.json');

// This is for your bot token, prefix, verison!!!


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// When the bot is online it will console log the following!


client.once('ready', () => {
    console.clear('');
    console.log('-------------------------------| BOT IS ONLINE :) |----------------------------------------------------------------');
    console.log('');
    console.log(`Bot has logged in as ` + client.user.tag);
    console.log('');
    console.log(' - Prefix -');
    console.log(prefix)
    console.log('');
    console.log(' - VERISON -');
    console.log(verison);
    console.log('');
    console.log(' - BOT -');
    console.log(isbot);
    client.user.setPresence({ activity: { type: "LISTENING", name: `zzerzv#0001`}, status: "dnd"})
});

// i have a github repository and yeah :) @prematurelol



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// This is for the commands, Like {prefix}help, etc

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.react('✅');
        client.commands.get('help').execute(message, args, Discord);
 
 
 
 
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'embed'){
        
        client.commands.get('embedsay').execute(message, args, Discord);
 
 
 
 
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'say'){
        
        client.commands.get('say').execute(message, args, Discord);
 
 
 
 
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'members'){

        client.commands.get('membercount').execute(message, args, Discord);
 
 
 
 
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){

        client.commands.get('ping').execute(message, args, Discord);
 
 
 
 
    }
});



client.login(token);




// If you want the ping / member count / embed / say command

// go to the github repo in the desc

// source code is there :)

// ILY!!!!