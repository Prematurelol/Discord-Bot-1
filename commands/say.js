const Discord = require('discord.js');

module.exports = {
  name: 'say',
  description: 'repeats whatever is said',
  execute(message, args){
  if (args.length > 0) message.channel.send(args.join(' '));
				else
					message.reply(
						'You did not send a message to repeat, cancelling command.'
					);
  }
}