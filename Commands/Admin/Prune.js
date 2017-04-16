const commando = require ("discord.js-commando");

class PruneCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "admin",
            name: "prune",
            memberName: "prune",
            description: "Prunes a given number of messages from a channel."
        });
    }

    async run (message, args)
    {
        

        // Send the response to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage ();
        await message.channel.stopTyping (true);
    }
}

module.exports = PruneCommand;
