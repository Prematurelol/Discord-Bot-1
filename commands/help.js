const config = require('../config.json');

module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#8000ff')
        .setTitle('----|  MY COMMANDS  |----')
        .setColor('#ff0f00')
        .setDescription('List of Commands.')
        .addFields(


            {name: `${config.prefix}help`, value: 'Gives the help list' , inline: true},


            {name: `${config.prefix}ping`, value: 'Shows the bots ping' , inline: true},


            {name: `${config.prefix}membercount`, value: 'Shows the member count for the server ||MODS ONLY||' , inline: true},


            {name: `${config.prefix}embed`, value: 'Repeates a message but embeded' , inline: true},


            {name: `${config.prefix}say`, value: 'Repeats whatever is said' , inline: true},


           )
            .setTimestamp()
            .setFooter(`Executed by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL());
            message.author.send(newEmbed);

       

    }
}


// ok so i copied + pasted from my notpad because i have like 30- mins to do this so :(