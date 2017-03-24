const commando = require ("discord.js-commando");

class DiceRollCommand extends commando.Command
{
    constructor (client)
    {
        super(client, {
            name: "roll",
            group: "random",
            memberName: "roll",
            description: "Rolls a die",
        });
    }

    async run(message, args) 
    {
        // Roll die.
        var roll = Math.floor (Math.random() * 6) + 1;

        // Send the message to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage("You rolled a " + roll + "!");
        await message.channel.stopTyping ();

        // Log the command usage and result.
        console.log (message.author.username + ": Just rolled a die.\nThey rolled a: " + roll);
    }
}

module.exports = DiceRollCommand;
