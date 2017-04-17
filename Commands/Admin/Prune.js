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
        var m = await message.channel.fetchMessages({limit: 10});

        var ma = m.array();

        // Send the response to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("hey");
        await message.channel.stopTyping (true);
    }
}

module.exports = PruneCommand;
